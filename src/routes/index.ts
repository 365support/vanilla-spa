/* @jsx createElement */
import { NotFound } from "..";
import { createElement, render } from "../render";
import { routes } from "./routes";

export const navigateTo = (url: string) => {
  const isSamePath = location.pathname === url;
  if (isSamePath) {
    history.replaceState(null, "", url);
  } else {
    history.pushState(null, "", url);
  }
  router();
};

export const router = async () => {
  const matchedRoutes = routes.map((route) => {
    return {
      route,
      isMatch: location.pathname === route.path,
    };
  });

  const match = matchedRoutes.find((matchedRoute) => matchedRoute.isMatch);

  const rootElement = document.getElementById("root")!;
  rootElement.innerHTML = "";
  const vdom = createElement(match ? match.route.view : NotFound, {});
  render(vdom, rootElement);
};
