import BarLink from "../Navbar/Link/Link";
import "./footer.css";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='left'>
        <BarLink
          text={<img src='/assets/shared/desktop/logo.svg' alt='logo' />}
          path={"/home"}></BarLink>
        <BarLink text={"Pricing"} path={"/pricing"}></BarLink>

        <BarLink text={"About"} path={"/about"}></BarLink>

        <BarLink text={"Contact"} path={"/contact"}></BarLink>
      </div>
      <div className='right'>
        <div className='logos'>
          <img src='/assets/shared/desktop/facebook.svg' alt='' />
          <img src='/assets/shared/desktop/twitter.svg' alt='' />
          <img src='/assets/shared/desktop/linkedin.svg' alt='' />
        </div>
      </div>
    </div>
  );
};

export default Footer;
