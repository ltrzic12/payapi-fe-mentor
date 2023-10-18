import NavLink from "../Link/Link";
import "./footer.css";

const Footer = () => {
  const style = {
    color: "rgb(251,252,254)",
    textDecoration: "none",
    filter: "brightness(100)",
    cursor: "pointer",
  };
  return (
    <div className='footer-wrap'>
      <div className='footer'>
        <div className='part-left'>
          <NavLink
            text={
              <img src='/assets/shared/desktop/logo.svg' alt='' style={style} />
            }
            path={"/"}></NavLink>

          <NavLink
            text={"Pricing"}
            linkStyle={style}
            path={"/pricing"}></NavLink>
          <NavLink text={"About"} linkStyle={style} path={"/about"}></NavLink>
          <NavLink
            text={"Contact"}
            linkStyle={style}
            path={"/contact"}></NavLink>
        </div>
        <div className='part'>
          <NavLink
            text={<img src='/assets/shared/desktop/facebook.svg' alt='' />}
            linkStyle={style}></NavLink>
          <NavLink
            text={
              <img src='/assets/shared/desktop/twitter.svg' alt='' />
            }></NavLink>
          <NavLink
            text={<img src='/assets/shared/desktop/linkedin.svg' alt='' />}
            linkStyle={style}></NavLink>
        </div>
      </div>
    </div>
  );
};

export default Footer;
