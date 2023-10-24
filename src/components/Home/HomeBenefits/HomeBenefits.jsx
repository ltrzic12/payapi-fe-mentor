import ContactInput from "../ContactInput/ContactInput";
import "./homeBenefits.css";

const HomeBenefits = () => {
  return (
    <div className='home-benefits'>
      <div className='home-benefits-icons'>
        <div>
          <img
            src='/assets/home/desktop/icon-personal-finances.svg'
            alt='personal-finances'
          />
          <h4>Personal Finances</h4>
          <p>
            Consolidate financial data from multiple sources and categorize
            transactions up to 2 years of history. Analyze reports to reconcile
            activities in your account.{" "}
          </p>
        </div>
        <div>
          <img
            src='/assets/home/desktop/icon-banking-and-coverage.svg'
            alt='banking-coverage'
          />
          <h4>Banking & Coverage</h4>
          <p>
            With our platform, you can speed up account onboarding and support
            ongoing payments for checking, savings, credit card, and brokerage
            accounts.
          </p>
        </div>
        <div>
          <img
            src='/assets/home/desktop/icon-consumer-payments.svg'
            alt='consumer-payments'
          />
          <h4>Consumer Payments</h4>
          <p>
            It’s easier to set up secure bank payments with us through a flow
            designed with the user experience in mind. Customers could instantly
            authenticate their account.
          </p>
        </div>
      </div>
      <div className='home-benefits-bottom'>
        <h2>Ready to start?</h2>

        <ContactInput></ContactInput>
      </div>
    </div>
  );
};

export default HomeBenefits;
