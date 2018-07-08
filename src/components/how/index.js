import React from "react";
import PropTypes from "prop-types";

import EmailIcon from "react-icons/lib/fa/envelope";
import "./style.scss";

const How = ({ children, showEmailButton, onEmailClick }) => (
  <section className="c-how">
    <div className="c-how-main">
      <h3>
        How We Work... <small>it's pretty awesome!</small>
      </h3>
      <div className="c-how-info">
        <div>
          <p>
            We're a team of talented JavaScript developers & product designers. We bring together development, design, 
            product management &amp; our clients to create an integrated team; focused 
            on building stunning products with modern web technology.  
            We have one hourly rate for all our resources, to provide our 
            clients maximum flexibility and support.
          </p>
        </div>
        <div className="c-how-info-price">
          <strong>
            $150<small>/hour</small>
          </strong>
          time &amp; materials contracts
        </div>
      </div>
    </div>
  </section>
);

How.propTypes = {
  children: PropTypes.node,
  showEmailButton: PropTypes.bool,
  onEmailClick: PropTypes.func
};

How.defaultProps = {
  children: "",
  showEmailButton: true,
  onEmailClick: () => {}
};

export default How;
