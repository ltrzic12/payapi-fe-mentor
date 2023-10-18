import { Link } from "react-router-dom";
import { navLinkStyle } from "../../mics/styles/navLinkStyle";

const NavLink = ({ text, linkStyle }) => {
  let style;
  if (linkStyle) {
    style = linkStyle;
  } else style = navLinkStyle;
  return <Link style={style}>{text}</Link>;
};

export default NavLink;
