/* @jsx createElement */
import { createElement } from "@react/render";
import { Link } from "@react-router-dom/Link";

export const Header = () => {
  return (
    <nav className="nav">
      <Link to="/tech">tech</Link>
      <Link to="/design">design</Link>
    </nav>
  );
};
