/* @jsx createElement */
import { createElement, render } from "./render";
import { navigateTo, router } from "./routes";
import { App } from ".";

document.addEventListener("DOMContentLoaded", () => {
  render(<App />, document.getElementById("root")!);

  document.body.addEventListener("click", (e: MouseEvent) => {
    if (!(e.target instanceof HTMLElement)) return;

    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      if (e.target instanceof HTMLAnchorElement) {
        navigateTo(e.target.href);
      }
    }
  });

  window.addEventListener("popstate", router);

  router();
});
