import "./home.css";

const Home = () => {
  return (
    <div className='home'>
      <section className='top-section'>
        <div className='introduction'>
          <h1>Start building with our APIs for absolutely free</h1>
          <div className='input'>
            <input type='text' placeholder='Enter email adress' />{" "}
            <button>Schedule a demo</button>
          </div>
          <p>
            Have any questions? <span>Contact Us</span>
          </p>
        </div>
        <div className='image'>
          <img
            src='/assets/home/desktop/illustration-phone-mockup.svg'
            alt='slika'
          />
        </div>
      </section>
      <section className='work-section'>
        <div className='work-with'>
          <h2>Who we work with</h2>
          <p>
            Today, millions of people around the world have successfully
            connected their accounts to apps they love using our API. We provide
            developers with the tools they need to create easy and accessible
            experiences for their users.
          </p>
          <button>About us</button>
        </div>
        <div className='grid-companies'>
          <div>
            <img
              src='/assets/shared/desktop/tesla.svg'
              alt=''
              className='white'
            />
          </div>
          <div>
            <img src='/assets/shared/desktop/microsoft.svg' alt='' />
          </div>
          <div>
            <img src='/assets/shared/desktop/hewlett-packard.svg' alt='' />
          </div>
          <div>
            <img src='/assets/shared/desktop/oracle.svg' alt='' />
          </div>
          <div>
            <img src='/assets/shared/desktop/google.svg' alt='' />
          </div>
          <div>
            <img src='/assets/shared/desktop/nvidia.svg' alt='' />
          </div>
        </div>
      </section>
      <section className='details'>
        <article className='top'>
          <div>
            <img
              src='/assets/home/desktop/illustration-easy-to-implement.svg'
              alt=''
            />
          </div>
          <div className='top-text'>
            <h3>Easy to implement</h3>
            <p>
              Our API comes with just a few lines of code. You’ll be up and
              running in no time. We built our documentation page to integrate
              payments functionality with ease.
            </p>
          </div>
        </article>
        <article className='top'>
          <div className='top-text'>
            <h3>Simple UI and UX</h3>
            <p>
              Our pre-built form is easy to integrate in your app or website’s
              checkout flow and designed to optimize conversion.{" "}
            </p>
          </div>
          <div>
            <img src='/assets/home/desktop/illustration-simple-ui.svg' alt='' />
          </div>
        </article>
        <article className='benefits'>
          <div className='benefit'>
            <img src='/assets/home/desktop/icon-personal-finances.svg' alt='' />
            <h4>Personal Finances</h4>
            <p>
              Consolidate financial data from multiple sources and categorize
              transactions up to 2 years of history. Analyze reports to
              reconcile activities in your account.{" "}
            </p>
          </div>
          <div className='benefit'>
            <img
              src='/assets/home/desktop/icon-banking-and-coverage.svg'
              alt=''
            />
            <h4>Banking & Coverage</h4>
            <p>
              With our platform, you can speed up account onboarding and support
              ongoing payments for checking, savings, credit card, and brokerage
              accounts.
            </p>
          </div>
          <div className='benefit'>
            <img src='/assets/home/desktop/icon-consumer-payments.svg' alt='' />
            <h4>Consumer Payments</h4>
            <p>
              It’s easier to set up secure bank payments with us through a flow
              designed with the user experience in mind. Customers could
              instantly authenticate their account.
            </p>
          </div>
        </article>
        <article className='bottom'>
          <h2>Ready to start?</h2>
          <div className='input'>
            <input type='text' placeholder='Enter email adress' />{" "}
            <button>Schedule a demo</button>
          </div>
        </article>
      </section>
      <footer></footer>
    </div>
  );
};

export default Home;
