import React from "react";

import Aux from '../../../hoc/Auxilery';
import Button from '../../UI/Button/Button';


const orderSummary = props => {

    const orderedIngredients = Object.keys(props.ingrediants)
        .map(ingKey => {
            return <li key={ingKey}>
                <span style={{textTransform: 'capitalize'}}>{ingKey}
                </span>
                :{' '}
                {props.ingrediants[ingKey]}
            </li>

        })

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {orderedIngredients}
            </ul>
            <h2>Total Price: ${props.price.toFixed(2)}</h2>
            <p>Continue to Checkout?</p>
            <Button
                btnType='Danger'
                btnClicked={props.cancelOrder}
            >CANCEL</Button>

            <Button
                btnType='Success'
                btnClicked={props.continueOrder}
            >CONTINUE</Button>
        </Aux>
    )
}


export default orderSummary;