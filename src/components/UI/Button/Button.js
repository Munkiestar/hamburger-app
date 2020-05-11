import React from "react";

import classes from './Button.module.css';

const btn = props => (
    <button
        className={[classes.Button, classes[props.btnType]].join(' ')}
        onClick={props.btnClicked}>{props.children}</button>
)

export default btn;