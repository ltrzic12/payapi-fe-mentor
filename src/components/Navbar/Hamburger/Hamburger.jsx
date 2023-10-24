import "./hamburger.css";

const Hamburger = ({ onClick }) => {
  const handleClick = () => {
    onClick();
  };
  return (
    <button className='hamburger' onClick={handleClick}>
      <i class='fa-solid fa-bars fa-2xl' style={{ color: "#36536b" }}></i>
    </button>
  );
};

export default Hamburger;
