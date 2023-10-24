import "./homeMiddle.css";

const HomeMiddle = () => {
  return (
    <div className='home-mid'>
      <div className='work-with'>
        <h2>Who we work with</h2>
        <p>
          Today, millions of people around the world have successfully connected
          their accounts to apps they love using our API. We provide developers
          with the tools they need to create easy and accessible experiences for
          their users.
        </p>
        <button>
          <a href='/about'>About us</a>
        </button>
      </div>
      <div className='companies'>
        <div>
          <img src='/assets/shared/desktop/tesla.svg' alt='tesla-logo' />
        </div>
        <div>
          <img
            src='/assets/shared/desktop/microsoft.svg'
            alt='microsoft-logo'
          />
        </div>
        <div>
          <img
            src='/assets/shared/desktop/hewlett-packard.svg'
            alt='hpackard-logo'
          />
        </div>
        <div>
          <img src='/assets/shared/desktop/oracle.svg' alt='oracle-logo' />
        </div>
        <div>
          <img src='/assets/shared/desktop/google.svg' alt='google-logo' />
        </div>
        <div>
          <img src='/assets/shared/desktop/nvidia.svg' alt='nvidia-logo' />
        </div>
      </div>
    </div>
  );
};

export default HomeMiddle;
