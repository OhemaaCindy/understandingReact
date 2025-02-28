import React from "react";

const Header = ({ title }) => {
  console.log("🚀 ~ Header ~ title:", title);
  return (
    <div>
      <p>{title}</p>
    </div>
  );
};

export default Header;
