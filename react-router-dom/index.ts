import { Route, routes } from "../src/routes/routes";
import { isEnglish, isSamePath } from "@utils";

interface Params {
  [key: string]: string;
}

export const navigateTo = (url: string, callback: () => void) => {
  const samePath = isSamePath(location.pathname, url);

  if (samePath) {
    history.replaceState(null, "", url);
  } else {
    history.pushState(null, "", url);
  }

  callback();
};

export const addLinkEventListeners = (callback: () => void) => {
  const links = document.querySelectorAll("a");

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const href = link.getAttribute("href");

      if (typeof href === "string") {
        navigateTo(href, callback);
      }
    });
  });
};

const findMatchedRouteAndParams = (routes: Route[]) => {
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

export const router = () => {
  const matched = findMatchedRouteAndParams(routes);
  if (matched) {
    return matched.route.view;
  }

  const errorRoute = routes.find((route) => route.path === "/error");
  if (errorRoute) {
    return errorRoute.view;
  }
};

export const useParams = () => {
  const matched = findMatchedRouteAndParams(routes);

  return matched ? matched.params : {};
};

export const useLocation = () => {
  const matched = findMatchedRouteAndParams(routes);
  if (!matched) return { pathname: "", search: {} };

  return {
    pathname: window.location.pathname,
    params: matched.params,
  };
};
