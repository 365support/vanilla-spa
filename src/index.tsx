/* @jsx createElement */
import { createElement, render } from "./render";
import { useLocation } from "./routes";
import { getArticles } from "./api/article";
import { Header } from "./components/Layout/Header";
import { PostsList } from "./components/Post/PostList";

let globalState = {
  postData: null,
};

function renderApp() {
  const rootElement = document.getElementById("root");
  if (!rootElement) return;
  render(<App postData={globalState.postData} />, rootElement);
}

export function App(props) {
  const location = useLocation();
  const currentPath = location.pathname.replace(/^\//, "");

  const postData = props?.postData;
  //TODO: globalState.postData가 차있을 때 renderApp 이 실행되지 않음
  if (!globalState.postData) {
    getArticles(currentPath)
      .then((posts) => {
        globalState.postData = posts;
        renderApp();
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

export const NotFound = () => <h1>NotFound</h1>;
