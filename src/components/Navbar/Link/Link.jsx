import { Link } from "react-router-dom";
import {} from "../../../mics/styles/navLinkStyle";
import "./link.css";

const BarLink = ({ text, path }) => {
  return (
    <a href={path} className='link'>
      {text}
    </a>
  );
};

export default BarLink;
