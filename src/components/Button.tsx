import React from 'react';
const Button: React.FC = () => {
  const homeUrl = "https://tripmilestone.com/";
  const homeLinkText = "Home";
  const instagramUrl = "https://www.instagram.com/tripmilestone/";
  const instagramLinkText = "Instagram";
  const phoneNumber = "9442424492";
  const contactUrl = `tel:${phoneNumber}`;
  const contactLinkText = "Contact";

  return (
    <div className="button-container">
        <h2>
          <a href={homeUrl}>{homeLinkText}</a>|<a href={instagramUrl}>{instagramLinkText}</a>|<a href={contactUrl}>{contactLinkText}</a>
        </h2>
    </div>
  );
};

export default Button;
