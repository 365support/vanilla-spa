import { navigateTo } from "./routes";

export type VNode = {
  tag: JSX.Tag | JSX.Component;
  props: JSX.Props;
  children: (VNode | string)[];
};

export function createDOM(node: VNode | string) {
  if (!node) {
    return document.createComment("Undefined node");
  }

  if (typeof node === "string") {
    return document.createTextNode(node);
  }

  if (Array.isArray(node)) {
    const fragment = document.createDocumentFragment();
    node.map(createDOM).forEach((child) => fragment.appendChild(child));
    return fragment;
  }

  if (typeof node.tag === "function") {
    const componentVNode = node.tag(node.props);
    return createDOM(componentVNode);
  }

  const element = document.createElement(node.tag);

  if (node.tag === "a") {
    element.addEventListener("click", (e) => {
      e.preventDefault();
      const href = element.getAttribute("href");

      if (typeof href === "string") {
        navigateTo(href);
      }
    });
  }

  Object.entries(node.props).forEach(([name, value]) => {
    const isClassAttribute = name === "className";
    if (isClassAttribute) {
      return element.setAttribute("class", value);
    }

    const isEventHandler = name.startsWith("on");
    if (isEventHandler) {
      const eventType = name.replace(/^on/, "").toLowerCase();
      return element.addEventListener(eventType, value);
    }

    element.setAttribute(name, value);
  });

  node.children.map(createDOM).forEach(element.appendChild.bind(element));

  return element;
}

export function createElement(
  tag: JSX.Tag | JSX.Component,
  props: JSX.Props,
  ...children: (VNode | string)[]
) {
  const copiedProps = props ?? {};

  const isFunctionalComponent = typeof tag === "function";
  const hasChildren = children.length > 0;

  if (isFunctionalComponent) {
    if (hasChildren) {
      return tag({
        ...props,
        children: children.length === 1 ? children[0] : children,
      });
    }
    return tag(props);
  }

  return {
    tag,
    props: copiedProps,
    children,
  };
}

export function render(vdom: VNode, container: HTMLElement) {
  container.innerHTML = "";
  container.appendChild(createDOM(vdom));
}
