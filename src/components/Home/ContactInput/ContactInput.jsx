import DemoButton from "../../Navbar/Button/DemoButton";
import "./contactInput.css";

const ContactInput = () => {
  return (
    <div className='contact-input'>
      <input type='text' placeholder='Enter email adress' />
      <DemoButton></DemoButton>
    </div>
  );
};

export default ContactInput;
