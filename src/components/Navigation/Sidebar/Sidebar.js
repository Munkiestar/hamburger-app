import React from "react";

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './Sidebar.module.css';

const sidebar = (props) => {


    return (
        <div className={classes.Sidebar}>
            <Logo height='11%'/>
            <nav>
                <NavigationItems />
            </nav>
        </div>
    );
};

export default sidebar;
