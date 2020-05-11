import React from "react";

import classes from './Logo.module.css';

import logoImg from '../../assets/img/burger-logo.png';

const logo = props => (
    <div className={classes.Logo} ><img src={logoImg} alt="burger logo"/></div>
);

export default logo;
