/* @jsx createElement */
import { createElement } from "./render";
import { addLinkEventListeners, router } from "./routes";

const initializeApp = () => {
  addLinkEventListeners();
  window.addEventListener("popstate", router);
  router();
};

document.addEventListener("DOMContentLoaded", initializeApp);
