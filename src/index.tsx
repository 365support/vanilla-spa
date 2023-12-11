/* @jsx createElement */
import { VNode, createElement, render } from "./render";
import { useLocation } from "./routes";
import { getArticles } from "./api/article";
import { removeFirstSlash } from "@utils";
import { Header } from "@components/Layout/Header";
import { PostsList } from "@components/Post/PostList";

type GlobalState = Record<string, null | any>;

const globalState: GlobalState = {
  "/": null,
  tech: null,
  design: null,
};

export function renderUI(component: VNode) {
  const rootElement = document.getElementById("root");
  if (!rootElement) return;
  render(component, rootElement);
}

export function App() {
  const location = useLocation();
  const currentPath = removeFirstSlash(location.pathname);

  const postData = globalState[currentPath];

  if (!globalState[currentPath]) {
    getArticles(currentPath)
      .then((posts) => {
        globalState[currentPath] = posts;
        renderUI(<App />);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  return (
    <div>
      <Header />
      <PostsList posts={postData} />
    </div>
  );
}
