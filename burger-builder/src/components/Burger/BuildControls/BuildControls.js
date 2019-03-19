import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css';
import '../../../index.css'

const buildControls = (props)=>{
    const controls = [
        {label:"Salad",type:'salad'},
        {label:"Cheese",type:'cheese'},
        {label:"Meat",type:'meat'},
        {label:"bacon",type:'bacon'},
    ]
    return <div className={classes.BuildControls}>
        <p className><strong>Current Price:{props.price}</strong></p>
        {controls.map(ctrl=>(
                 <BuildControl  
                 key={ctrl.label} 
                 label={ctrl.label}
                 added = {()=>props.ingrediantAdded(ctrl.type)}
                 removed = {()=>props.ingrediantDeleted(ctrl.type)}
                 disabled={props.disabled[ctrl.type]}/>
                ))}
                <button className={classes.OrderButton} disabled={!props.purchaseable}>ORDER NOW</button>
        </div>

};

export default buildControls;


