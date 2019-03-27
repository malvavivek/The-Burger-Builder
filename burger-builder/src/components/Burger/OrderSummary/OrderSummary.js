import React from 'react';
import Aux from '../../../hoc/auxiliary';
import Button from '../../UI/Button/Button';

const orderSummary  = (props)=>{
    const ingrediants = Object.keys(props.ingrediants)
    .map((igkey)=>{
        return <li key={igkey}><span>{igkey}</span>:{props.ingrediants[igkey]}</li>
        // console.log(igkey)
    })
   
    return <Aux>
        <h3>Your Order</h3>
        <p>A burger with following Ingrediants</p>
        <ul>
            {ingrediants}
        </ul>
        <p>Continue to checkout?</p>
        <Button btnType="Danger" clicked={props.clicked}>CANCEL</Button>
        <Button btnType="Success">CONTINUE</Button>
    </Aux>
}


export default orderSummary;