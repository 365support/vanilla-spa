import { VNode } from "src/render";
import { App } from "..";
import { PostContent } from "../../src/components/Post/PostContent";

export interface Route {
  path: string;
  view: (data: any) => VNode;
}

export const routes: Route[] = [
  { path: "/", view: App },
  { path: "/design", view: App },
  { path: "/article/:slug", view: PostContent },
];
