/* @jsx createElement */
import { createElement } from "@react/render";
import { addLinkEventListeners } from "@react-router-dom/index";
import { renderViewComponent } from "@react-router-dom/Link";
const { worker } = require("./mock/browser");

const initializeApp = () => {
  worker.start();
  addLinkEventListeners(renderViewComponent);
  window.addEventListener("popstate", renderViewComponent);

  renderViewComponent();
};

document.addEventListener("DOMContentLoaded", initializeApp);
