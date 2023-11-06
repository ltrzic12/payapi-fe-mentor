import ContactInput from "../Home/ContactInput/ContactInput";
import "./pricing.css";

const Pricing = () => {
  return (
    <div className='pricing'>
      <h2 className='pricing-h2'>Pricing</h2>
      <div className='plans'>
        <div className='plan'>
          <h3>Free Plan</h3>
          <p>
            Build and test using our core set of products with up to 100 API
            requests{" "}
          </p>
          <h2>$0.00</h2>
          <div className='line'></div>
          <ul className='pricing-benefits'>
            <li>Transactions</li>
            <li>Auth</li>
            <li>Identity</li>
            <li className='no-dot'>Investments</li>
            <li className='no-dot'>Assets</li>
            <li className='no-dot'>Liabilities</li>
            <li className='no-dot'>Income</li>
          </ul>
          <div className='line'></div>
          <button>Request Access</button>
        </div>
        <div className='plan'>
          <h3>Basic Plan</h3>
          <p>
            Launch your project with unlimited requests and no contractual
            minimums{" "}
          </p>
          <h2>$249.00</h2>
          <div className='line'></div>
          <ul className='pricing-benefits'>
            <li>Transactions</li>
            <li>Auth</li>
            <li>Identity</li>
            <li>Investments</li>
            <li>Assets</li>
            <li className='no-dot'>Liabilities</li>
            <li className='no-dot'>Income</li>
          </ul>
          <div className='line'></div>
          <button>Request Access</button>
        </div>
        <div className='plan'>
          <h3>Premium Plan</h3>
          <p>
            Get tailored solutions, volume pricing, and dedicated support for
            your team
          </p>
          <h2>$499.00</h2> <div className='line'></div>
          <ul className='pricing-benefits'>
            <li>Transactions</li>
            <li>Auth</li>
            <li>Identity</li>
            <li>Investments</li>
            <li>Assets</li>
            <li>Liabilities</li>
            <li>Income</li>
          </ul>{" "}
          <div className='line'></div>
          <button>Request Access</button>
        </div>
      </div>
      <div className='home-benefits-bottom'>
        <h2>Ready to start?</h2>

        <ContactInput></ContactInput>
      </div>
    </div>
  );
};

export default Pricing;
