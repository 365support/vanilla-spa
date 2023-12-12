/* @jsx createElement */
import { VNode, createElement, render } from "@react/render";
import { navigateTo, router } from "@react-router-dom/index";

export const renderViewComponent = () => {
  const rootElement = document.getElementById("root");
  if (!rootElement) return;

  const ViewComponent = router();
  if (ViewComponent) {
    render(ViewComponent(), rootElement);
  }
};

interface LinkProps {
  to: string;
  children: VNode | string;
}

export const Link = ({ to, children }: LinkProps) => {
  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    navigateTo(to, renderViewComponent);
  };

  return (
    <a href={to} onClick={handleClick}>
      {children}
    </a>
  );
};
