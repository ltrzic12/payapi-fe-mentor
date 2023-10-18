import { Link } from "react-router-dom";
import { navLinkStyle } from "../../mics/styles/navLinkStyle";

const NavLink = ({ text, linkStyle, path }) => {
  let style;
  if (linkStyle) {
    style = linkStyle;
  } else style = navLinkStyle;
  return (
    <Link style={style} to={path}>
      {text}
    </Link>
  );
};

export default NavLink;
