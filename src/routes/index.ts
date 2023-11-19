/* @jsx createElement */
import { NotFound } from "..";
import { createElement, render } from "../render";
import { routes } from "./routes";
import { isSamePath } from "../utils/isSamePath";

export const navigateTo = (url: string) => {
  const samePath = isSamePath(location.pathname, url);

  if (samePath) {
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
      isMatch: isSamePath(location.pathname, route.path),
    };
  });

  const matchedRoute = matchedRoutes.find(
    (matchedRoute) => matchedRoute.isMatch
  );

  const rootElement = document.getElementById("root");
  if (rootElement) {
    rootElement.innerHTML = "";
    render(matchedRoute ? matchedRoute.route.view() : NotFound, rootElement);
  }
};

export const addLinkEventListeners = () => {
  const links = document.querySelectorAll("a");

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const href = link.getAttribute("href");

      if (typeof href === "string") {
        navigateTo(href);
      }
    });
  });
};
