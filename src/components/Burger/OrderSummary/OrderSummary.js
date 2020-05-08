import React from "react";
import Aux from '../../../hoc/Auxilery';


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
            <p>A delitius burger with the following ingredients:</p>
            <ul>
                {orderedIngredients}
            </ul>
            <p>Continue to Checkout?</p>
        </Aux>
    )
}


export default orderSummary;