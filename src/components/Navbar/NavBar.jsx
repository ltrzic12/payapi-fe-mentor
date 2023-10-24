import "./navbar.css";
import BarLink from "./Link/Link";
import DemoButton from "./Button/DemoButton";
import Hamburger from "./Hamburger/Hamburger";

const NavBar = ({ isMobileView }) => {
  return (
    <div className='navbar'>
      <div className='left'>
        <BarLink
          text={<img src='/assets/shared/desktop/logo.svg' alt='logo' />}
          path={"/home"}></BarLink>

        {!isMobileView && (
          <>
            <BarLink text={"Pricing"} path={"/pricing"}></BarLink>

            <BarLink text={"About"} path={"/about"}></BarLink>

            <BarLink text={"Contact"} path={"/contact"}></BarLink>
          </>
        )}
      </div>
      <div className='right'>
        {!isMobileView && <DemoButton></DemoButton>}
        {isMobileView && <Hamburger></Hamburger>}
      </div>
    </div>
  );
};

export default NavBar;
