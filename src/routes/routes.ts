import { App, First, Second, SecondDetail } from "..";

export const routes = [
  { path: "/", view: App },
  { path: "/first", view: First },
  { path: "/second", view: Second },
  { path: "/second/:id", view: SecondDetail },
  { path: "/123", view: First },
];
