/* @jsx createElement */
import { createElement } from "../../render";
import { getArticleDetail } from "../../api/article";
import { useLocation, useParams } from "../../routes";
import { Header } from "../Layout/Header";
import { renderUI } from "../..";

type GlobalState = Record<string, null | any>;

const globalState: GlobalState = {
  "/": null,
  tech: null,
  design: null,
};

export const PostContent = () => {
  const location = useLocation();
  const currentPath = location.pathname.replace(/^\//, "");
  const { slug } = useParams();

  const content = globalState[currentPath];

  if (!content) {
    getArticleDetail(slug)
      .then((posts) => {
        globalState[currentPath] = posts;
        renderUI(<PostContent />);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }

  return (
    <section>
      <Header />
      {content?.success.data.map((item: any) => {
        return <li key={item.id}>{item.id}</li>;
      })}
    </section>
  );
};
