import { VNode } from "src/render";
import { App, Design, Detail } from "..";

export interface Route {
  path: string;
  view: () => VNode;
}

export const routes: Route[] = [
  { path: "/", view: App },
  { path: "/design", view: Design },
  { path: "/article/:slug", view: Detail },
];
