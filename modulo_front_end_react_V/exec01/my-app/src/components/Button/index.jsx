import React from "react";
import { useState, useEffect } from "react";
// import api from '../../services/api';

import "./style.css";

const Button = (props) => {
  return (
    <button className={props.color}>{props.title}</button>
  );
};

export default Button;
