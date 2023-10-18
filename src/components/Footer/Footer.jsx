import NavLink from "../Link/Link";
import "./footer.css";

const Footer = () => {
  const style = {
    color: "rgb(251,252,254)",
    textDecoration: "none",
    filter: "brightness(100)",
  };
  return (
    <div className='footer-wrap'>
      <div className='footer'>
        <div className='part-left'>
          <NavLink
            text={
              <img src='/assets/shared/desktop/logo.svg' alt='' style={style} />
            }></NavLink>

          <NavLink text={"Pricing"} linkStyle={style}></NavLink>
          <NavLink text={"About"} linkStyle={style}></NavLink>
          <NavLink text={"Contact"} linkStyle={style}></NavLink>
        </div>
        <div className='part'>
          <img src='/assets/shared/desktop/facebook.svg' alt='' />
          <img src='/assets/shared/desktop/twitter.svg' alt='' />
          <img src='/assets/shared/desktop/linkedin.svg' alt='' />
        </div>
      </div>
    </div>
  );
};

export default Footer;
