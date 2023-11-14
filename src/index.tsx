/* @jsx createElement */
import { createElement } from "./render";
import styles from "./main.module.css";

interface TitleProps {
  children: React.ReactNode;
}

interface ItemProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLLIElement>;
  className?: string;
}

function Title({ children }: TitleProps) {
  return <h1>{children}</h1>;
}

function Item({ children, ...props }: ItemProps) {
  return <li {...props}>{children}</li>;
}

export function App() {
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

export const First = () => <h1>First</h1>;
export const Second = () => <h1>Second</h1>;
export const NotFound = () => <h1>NotFound</h1>;
