import React from "react";
import { useState, useEffect } from "react";
import { LogoAmericanas } from "../../assets/images";

// import api from '../../services/api';

import "./style.css";

const Header = () => {
  return (
    <header>
      <div className="header-americanas">
        <img src="./americanas.png" alt="" height="30" />
        <div>
          <h1>Loja Online</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
