type Props = Record<string, any>;

export type VNode = {
  tag: keyof HTMLElementTagNameMap | ((props: Props) => VNode);
  props: Props;
  children: (VNode | string)[];
};

export function createDOM(node: VNode | string): Node {
  if (typeof node === "string") {
    return document.createTextNode(node);
  }

  if (typeof node.tag === "function") {
    const componentVNode = node.tag(node.props);
    return createDOM(componentVNode);
  }

  const element = document.createElement(node.tag);

  Object.entries(node.props).forEach(([name, value]) => {
    const isClassAttribute = name === "className";
    if (isClassAttribute) {
      return element.setAttribute("class", value);
    }

    const isEventHandler = name.startsWith("on");
    if (isEventHandler) {
      const eventType = name.toLowerCase().substring(2);
      return element.addEventListener(eventType, value);
    }

    element.setAttribute(name, value);
  });

  node.children.map(createDOM).forEach(element.appendChild.bind(element));

  return element;
}

export function createElement(
  tag: keyof HTMLElementTagNameMap | ((props: Props) => VNode),
  props: Props,
  ...children: (VNode | string)[]
) {
  props = props || {};

  const isFunctionalComponent = typeof tag === "function";

  if (isFunctionalComponent) {
    if (children.length > 0) {
      return tag({
        ...props,
        children: children.length === 1 ? children[0] : children,
      });
    } else {
      return tag(props);
    }
  } else {
    return {
      tag,
      props,
      children,
    };
  }
}

export function render(vdom: VNode, container: HTMLElement) {
  container.appendChild(createDOM(vdom));
}
