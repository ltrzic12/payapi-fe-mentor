import "./hamburger.css";

const Hamburger = ({ onClick }) => {
  const handleClick = () => {
    onClick();
  };
  return (
    <button className='hamburger' onClick={handleClick}>
      <i className='fa-solid fa-bars fa-2xl' style={{ color: "#36536b" }}></i>
    </button>
  );
};

export default Hamburger;
