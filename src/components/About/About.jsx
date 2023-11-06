import ContactInput from "../Home/ContactInput/ContactInput";
import "./about.css";

const About = () => {
  return (
    <div className='about'>
      <div className='about-top'>
        <h2>
          We empower innovators by delivering access to the financial system
        </h2>
        <div className='about-section'>
          <h3>Our Vision</h3>
          <p>
            Our main goal is to build beautiful consumer experiences along with
            developer-friendly infrastructure. The result is an intelligent tool
            that gives everyone the ability to create amazing products that
            solve big problems. We are deeply focused on democratizing financial
            services through technology.{" "}
          </p>
        </div>
        <div className='about-section'>
          <h3>Our Bussiness</h3>
          <p>
            At the core of our platform is the technical infrastructure APIs
            that connect consumers. Our innovative product provides key insights
            for businesses and individuals, as well as robust reporting for
            traditional financial institutions and developers.{" "}
          </p>
        </div>
      </div>
      <div className='image'>
        <img src='/assets/about/desktop/image-team-members.jpg' alt='' />
      </div>
      <div className='about-team'>
        <div className='about-team-item'>
          <div className='line'></div>
          <h5>Team members</h5>
          <h2>300+</h2>
          <div className='line'></div>
        </div>
        <div className='about-team-item'>
          <div className='line'></div>
          <h5>Offices in the US</h5>
          <h2>3</h2>
          <div className='line'></div>
        </div>
        <div className='about-team-item'>
          <div className='line'></div>
          <h5>Transactions analysed</h5>
          <h2>10M+</h2>
          <div className='line'></div>
        </div>
      </div>

      <div className='about-top'>
        <div className='about-section'>
          <h3>The Culture</h3>
          <p>
            We strongly believe there's always an opportunity to learn from each
            other outside of day-to-day work, whether it's company-wide
            offsites, internal hackathons, or co-worker meetups. We always value
            cross-team collaboration and diversity of thought, no matter the job
            title.
          </p>
        </div>
        <div className='about-section'>
          <h3>The People</h3>
          <p>
            We're all passionate about building a more efficient and inclusive
            financial infrastructure together. At PayAPI, we have diverse
            backgrounds and skills.{" "}
          </p>
        </div>
        <div className='home-benefits-bottom'>
          <h2>Ready to start?</h2>

          <ContactInput></ContactInput>
        </div>
      </div>
    </div>
  );
};

export default About;
