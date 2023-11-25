/* @jsx createElement */
import { NotFound } from "..";
import { VNode, createElement, render } from "../render";
import { routes } from "./routes";
import { isEnglish, isSamePath } from "utils";

interface Params {
  [key: string]: string;
}

export const navigateTo = (url: string) => {
  const samePath = isSamePath(location.pathname, url);

  if (samePath) {
    history.replaceState(null, "", url);
  } else {
    history.pushState(null, "", url);
  }

  router();
};

const findMatchedRouteAndParams = (routes) => {
  const currentPath = location.pathname;

  for (const route of routes) {
    const routeSegments = route.path.split("/");
    const currentPathSegments = currentPath.split("/");

    if (routeSegments.length !== currentPathSegments.length) {
      continue;
    }

    const params: Params = {};
    const isMatch = routeSegments.every((segment: string, index: number) => {
      const isDynamicSegment = segment.startsWith(":");
      const normalizedSegment = segment.replace(/^:/, "");

      if (!isEnglish(normalizedSegment)) return false;

      if (isDynamicSegment) {
        params[normalizedSegment] = currentPathSegments[index];
        return true;
      }
      return segment === currentPathSegments[index];
    });

    if (isMatch) {
      return { route, params };
    }
  }

  return null;
};

const renderView = (view: () => VNode, container: HTMLElement) => {
  container.innerHTML = "";
  render(view(), container);
};

export const router = () => {
  const rootElement = document.getElementById("root");
  if (!rootElement) return;

  const matched = findMatchedRouteAndParams(routes);
  if (matched) {
    return renderView(matched.route.view, rootElement);
  }

  renderView(NotFound, rootElement);
};

export const useParams = () => {
  const matched = findMatchedRouteAndParams(routes);

  return matched ? matched.params : {};
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
