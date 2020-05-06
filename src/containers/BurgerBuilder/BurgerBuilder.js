import React, {Component} from 'react';

import Aux from '../../hoc/Auxilery';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingrediants: {
                salad: 0,
                bacon: 0,
                cheese: 0,
                meat: 0
            }
        }
    }

    render() {
        return (
            <Aux>
                <Burger ingrediants={this.state.ingrediants}/>
                <div>Build Controls</div>

            </Aux>
        );
    }
}

export default BurgerBuilder;