declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

declare namespace JSX {
  type Element = VNode;

  interface IntrinsicElements extends IntrinsicElementMap {}

  type IntrinsicElementMap = {
    [K in keyof HTMLElementTagNameMap]: {
      [k: string]: any;
    };
  };

  type Tag = keyof JSX.IntrinsicElements;

  type Props = Record<string, any>;

  interface Component {
    (properties?: Props, children?: (VNode | string)[]): VNode | string;
  }
}
