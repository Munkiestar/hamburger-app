import React from "react";

import classes from './Logo.module.css';

import logoImg from '../../assets/img/burger-logo.png';

const logo = props => (
    <img className={classes.Logo} src={logoImg} alt="burger logo"/>
);

export default logo;
