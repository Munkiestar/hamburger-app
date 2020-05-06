import React from 'react';

import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'},
    { label: 'Bacon', type: 'bacon'},
]


const buildControls = props => (
    <div className={classes.BuildControls}>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map( control => (
            <BuildControl
                key={control.label}
                label={control.label}
                added={() => props.addingIngrediant(control.type)}
                removed={() => props.removingIngrediants(control.type)}
                disabled={props.disabled[control.type]}
            />
        ))}
    </div>
);

export default buildControls;