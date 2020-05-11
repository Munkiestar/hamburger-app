import React from "react";

import Aux from '../../hoc/Auxilery';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = (props) => (
   <Aux>
       <Toolbar/>
       <main className={classes.Layout}>
           {props.children}
       </main>
   </Aux>
);



export default layout;