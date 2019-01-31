import React, { Component } from "react";
// import "./App.css";

const Header = () => {
  return (
    <header className="header">
      <img
        src="data:image/jpeg;base64,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"
        class="img-responsive"
        alt="Image"
      />
    </header>
  );
};

export default Header;
