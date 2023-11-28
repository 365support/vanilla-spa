/* @jsx createElement */
import { createElement } from "./render";
import styles from "./main.module.css";
import { API_URL } from "@constants";
import { useLocation, useParams } from "./routes";
import { getArticles, getArticleDetail } from "./api/article";

interface TitleProps {
  children: string;
}

interface ItemProps {
  children: string;
  onClick?: (event: MouseEvent) => void;
  className?: string;
}

function Title({ children }: TitleProps) {
  return <h1>{children}</h1>;
}

function Item({ children, ...props }: ItemProps) {
  return <li {...props}>{children}</li>;
}

export function App() {
  //Todo: 받아온 데이터 반영
  const data = fetch(`${API_URL.ARTICLES}?categoriesSlug=tech`).then((res) => {
    return res.json();
  });

  const posts = getArticles("tech")
    .then((posts) => {
      return posts;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });

  return (
    <div>
      <Title>React 만들기</Title>
      <ul>
        <Item onClick={() => console.log("hi")} className={styles.item}>
          item 1
        </Item>
        <Item>item 2</Item>
        <Item>item 3</Item>
      </ul>
      <img src="https://picsum.photos/200/300" width="200" height="300" />
    </div>
  );
}

export const Design = () => {
  const location = useLocation();
  console.log("location", location);
  const currentPath = location.pathname.replace(/^\//, "");

  fetch(`${API_URL.ARTICLES}?categoriesSlug=${currentPath}`).then((res) =>
    res.json()
  );

  return <h1>Design</h1>;
};

export const Detail = () => {
  const param = useParams();
  console.log("param", param);

  fetch(`${API_URL.ARTICLES_DETAIL}/${param.slug}`).then((res) => res.json());

  return <h1> Detail</h1>;
};

export const NotFound = () => <h1>NotFound</h1>;
