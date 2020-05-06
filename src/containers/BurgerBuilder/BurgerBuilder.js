import React, {Component} from 'react';

import Aux from '../../hoc/Auxilery';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: .7
}

class BurgerBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingrediants: {
                salad: 0,
                bacon: 0,
                cheese: 0,
                meat: 0
            },
            totalPrice: 4
        }
        this.handleRemoveIngrediantes = this.handleRemoveIngrediantes.bind(this);
        this.handleAddIngrediantes = this.handleAddIngrediantes.bind(this);
    }

    handleAddIngrediantes(type){
        const oldIngredCount = this.state.ingrediants[type];
        const updatedIngredCount = oldIngredCount + 1;
        const updatedIngrediants = {
            ...this.state.ingrediants
        };
        updatedIngrediants[type] = updatedIngredCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({
            totalPrice: newPrice,
            ingrediants: updatedIngrediants
        })
    }

    handleRemoveIngrediantes(type){
        const oldIngredCount = this.state.ingrediants[type];
        if(oldIngredCount <= 0){
            return;
        }
        const updatedIngredCount = oldIngredCount - 1;
        const updatedIngrediants = {
            ...this.state.ingrediants
        };
        updatedIngrediants[type] = updatedIngredCount;
        const priceDedacition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDedacition;
        this.setState({
            totalPrice: newPrice,
            ingrediants: updatedIngrediants
        })
    }

    render() {

        const disabledInfo = {
            ...this.state.ingrediants
        }
        for( let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        return (
            <Aux>
                <Burger ingrediants={this.state.ingrediants}/>
                <BuildControls
                addingIngrediant={this.handleAddIngrediantes}
                removingIngrediants={this.handleRemoveIngrediantes}
                disabled={disabledInfo}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;