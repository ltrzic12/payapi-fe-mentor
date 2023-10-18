import NavLink from "../Link/Link";
import "./navbar.css";

const NavBar = () => {
  return (
    <div className='nav-bar-wrap'>
      <div className='navbar'>
        <div className='part-left'>
          <NavLink
            text={<img src='/assets/shared/desktop/logo.svg' alt='' />}
            path={"/"}></NavLink>

          <NavLink text={"Pricing"} path={"/pricing"}></NavLink>
          <NavLink text={"About"} path={"/about"}></NavLink>
          <NavLink text={"Contact"} path={"/pricing"}></NavLink>
        </div>
        <div className='part'>
          <button>Schedule a demo</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
