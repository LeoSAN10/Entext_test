import React from "react";
import "./styles.css";
import VISA from "../../assets/Visa_Logo.png";
import MASTERCARD from "../../assets/Mastercard_Logo.png";
import MAESTRO from "../../assets/Maestro_Logo.png";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-info">
        <div className="footer-info-details">
          <div className="footer-info-details-title">Lorem</div>
          <div className="footer-info-details-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus
            nisl tincidunt eget nullam non nisi est sit amet.
          </div>
        </div>
        <div className="footer-info-details">
          <div className="footer-info-details-title">Lorem Ipsum</div>
          <div className="footer-info-details-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus
            nisl tincidunt eget nullam non nisi est sit amet. Vulputate odio ut
            enim blandit volutpat maecenas volutpat. Massa tincidunt dui ut
            ornare lectus sit. Quam elementum pulvinar etiam non.
          </div>
        </div>
        <div className="footer-info-details">
          <div className="footer-info-details-title">Contacts</div>
          <div className="footer-info-details-contacts">
            <div className="footer-info-details-contacts-city">London</div>
            <div className="footer-info-details-contacts-adress">
              26985 Brighton Lane, Lake Forest, CA 92630
            </div>
            <div className="footer-info-details-contacts-number">
              +1 (949) 354-2574
            </div>
          </div>
          <div className="footer-info-details-contacts">
            <div className="footer-info-details-contacts-city">Paris</div>
            <div className="footer-info-details-contacts-adress">
              9 Doe Crossing Court
            </div>
            <div className="footer-info-details-contacts-number">
              +11 281-762-2687
            </div>
          </div>
        </div>
      </div>
      <div className="footer-info-details-payment">
        <div>
          <img src={VISA} alt="visa" />
        </div>
        <div>
          <img src={MASTERCARD} alt="mastercard" />
        </div>
        <div>
          <img src={MAESTRO} alt="maestro" />
        </div>
      </div>
      <div className="footer-rights">
        <div className="footer-rights-date">2022-2023 All rights reserved</div>
        <div className="footer-rights-created">Site is developed by ME</div>
      </div>
    </div>
  );
};

export default Footer;
