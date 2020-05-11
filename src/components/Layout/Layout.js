import React from "react";

import Aux from '../../hoc/Auxilery';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Sidebar from '../Navigation/Sidebar/Sidebar';

const layout = (props) => (
   <Aux>
       <Toolbar />
       <Sidebar />
       <main className={classes.Layout}>
           {props.children}
       </main>
   </Aux>
);



export default layout;