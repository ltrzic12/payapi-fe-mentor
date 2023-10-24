import "./homeBottom.css";

const HomeBottom = () => {
  return (
    <div className='home-bottom'>
      <div className='section'>
        <div className='bottom-image'>
          <img
            src='/assets/home/desktop/illustration-easy-to-implement.svg'
            alt='easy-to-implement'
          />
        </div>
        <div className='section-text'>
          <h2>Easy to implement</h2>
          <p>
            Our API comes with just a few lines of code. You’ll be up and
            running in no time. We built our documentation page to integrate
            payments functionality with ease.
          </p>
        </div>
      </div>
      <div className='section'>
        <div className='section-text'>
          <h2>Simple UI & UX</h2>
          <p>
            Our pre-built form is easy to integrate in your app or website’s
            checkout flow and designed to optimize conversion.{" "}
          </p>
        </div>
        <div className='bottom-image'>
          <img src='/assets/home/desktop/illustration-simple-ui.svg' alt='' />
        </div>
      </div>
    </div>
  );
};

export default HomeBottom;
