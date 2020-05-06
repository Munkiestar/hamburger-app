import React from "react";

import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngridient/BurgerIngredient';

const burger = props => {

    let newIngrediants = Object.keys(props.ingrediants)
        .map(igKey => {
            return [...Array(props.ingrediants[igKey])].map(( _, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey}/>
            })
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    console.log('newIngrediants', newIngrediants)

    if(newIngrediants.length === 0){
        newIngrediants = <p>Please start adding your ingreadiants!</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top'/>
            {newIngrediants}
            <BurgerIngredient type='bread-bottom'/>
        </div>
    )
}

export default burger;