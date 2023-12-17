import { VNode } from "@react/render";
import { App } from "..";
import { PostContent } from "@components/Post/PostContent";
import { Error } from "@components/Error";

export interface Route {
  path: string;
  view: (data?: any) => VNode;
}

export const routes: Route[] = [
  { path: "/", view: App },
  { path: "/tech", view: App },
  { path: "/design", view: App },
  { path: "/article/:slug", view: PostContent },
  { path: "/error", view: Error },
];
