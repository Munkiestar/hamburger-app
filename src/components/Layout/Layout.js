import React, {Component} from "react";

import Aux from '../../hoc/Auxilery';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Sidebar from '../Navigation/Sidebar/Sidebar';

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSidebar: false
        }
        this.handleSidebarClose = this.handleSidebarClose.bind(this);
        this.handleSidebarToggle = this.handleSidebarToggle.bind(this);
    }

    handleSidebarClose(){
        this.setState({showSidebar: false})
    }

    handleSidebarToggle (){
        this.setState( prevState => {
            return {showSidebar: !prevState.showSidebar}
        });
    }

    render() {
        return (
            <Aux>
                <Toolbar sidebarMenuClicked={this.handleSidebarToggle}/>
                <Sidebar open={this.state.showSidebar}
                         closed={this.handleSidebarClose}/>
                <main className={classes.Layout}>
                    {this.props.children}
                </main>
            </Aux>
        )

    }

}


export default Layout;