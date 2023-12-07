/* @jsx createElement */
import { createElement, render } from "../../render";
import { getArticleDetail } from "../../api/article";
import { useParams } from "../../routes";
import { Header } from "../Layout/Header";

let globalState = {
  testData: null,
  content: null,
};

function renderApp() {
  const rootElement = document.getElementById("root");
  if (!rootElement) return;
  render(<PostContent content={globalState.content} />, rootElement);
}

export const PostContent = (props) => {
  const { slug } = useParams();

  const content = props?.content;

  if (!globalState.content) {
    getArticleDetail(slug)
      .then((posts) => {
        globalState.content = posts;
        renderApp();
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }

  return (
    <section>
      <Header />
      {content?.success.data.map((item) => {
        return <li key={item.id}>{item.id}</li>;
      })}
    </section>
  );
};
