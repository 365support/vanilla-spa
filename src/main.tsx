/* @jsx createElement */
import { createElement } from "./render";
import { addLinkEventListeners, router } from "./routes";
const { worker } = require("./mock/browser");

const initializeApp = () => {
  worker.start();
  addLinkEventListeners();
  window.addEventListener("popstate", router);
  router();
};

document.addEventListener("DOMContentLoaded", initializeApp);
