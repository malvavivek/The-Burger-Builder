import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css'

const buildControls = (props)=>{
    const controls = [
        {label:"Salad",type:'salad'},
        {label:"Cheese",type:'cheese'},
        {label:"Meat",type:'meat'},
        {label:"bacon",type:'bacon'},
    ]
    return <div className={classes.BuildControls}>
        {controls.map(ctrl=>(
                 <BuildControl  
                 key={ctrl.label} 
                 label={ctrl.label}
                 added = {()=>props.ingrediantAdded(ctrl.type)}
                 removed = {()=>props.ingrediantDeleted(ctrl.type)}/>
                ))}
        </div>

};

export default buildControls;


