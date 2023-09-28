import './Companies.css';
import logo1 from './logo1.svg';
import logo2 from './logo2.png';

import kra from './kra.png';
import safaricom from './safaricom.png';
import deloitte from './deloitte.png';



const partnerLogos = [logo1, logo2,kra,deloitte, safaricom,kra,deloitte, safaricom ]; 

const PartnerCompanies = () => {
  return (
    <div className="partner-companies">
      <h2>Our Partner Companies</h2>
      <div className="partner-description">
        <p>
          We have partnered with top companies and Institutions to make it easy for students
          to have a smooth transition from campus to the job field.
        </p>
      </div>
      <div className="partner-logos">
        {partnerLogos.map((logo, index) => (
          <img
            src={logo}
            alt={`Company Logo ${index + 1}`}
            className="partner-logo"
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default PartnerCompanies;
