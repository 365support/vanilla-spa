import { VNode } from "src/render";
import { App, First, Second, SecondDetail } from "..";

export interface Route {
  path: string;
  view: () => VNode;
}

export const routes: Route[] = [
  { path: "/", view: App },
  { path: "/first", view: First },
  { path: "/second", view: Second },
  { path: "/second/:id", view: SecondDetail },
  { path: "/123", view: First },
];
