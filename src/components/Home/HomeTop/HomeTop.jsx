import ContactInput from "../ContactInput/ContactInput";
import "./homeTop.css";

const HomeTop = () => {
  return (
    <div className='home-top'>
      <div className='left'>
        <h1>Start building with our APIs for absolutely free.</h1>
        <ContactInput></ContactInput>
        <p>
          Have any questions? <a href='/contact'>Contact us</a>
        </p>
      </div>

      <img src='/assets/home/desktop/illustration-phone-mockup.svg' alt='' />
    </div>
  );
};

export default HomeTop;
