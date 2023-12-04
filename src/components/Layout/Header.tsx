/* @jsx createElement */
import { createElement } from "../../render";

export const Header = () => {
  return (
    <nav className="nav">
      <a href="/" className="nav__link" data-link>
        tech
      </a>
      <a href="/design" className="nav__link" data-link>
        design
      </a>
    </nav>
  );
};
