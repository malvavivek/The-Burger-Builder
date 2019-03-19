import React from 'react';
import BurgerIngrediant from './BurgerIngrediant/BurgerIngrediant';
import classes from './Burger.css'
const burger = (props)=>{
    let transformedIngrediants = Object.keys(props.ingrediants)
    .map(igKey=>{
        return [...Array(props.ingrediants[igKey])].map((_,i)=>{
           return <BurgerIngrediant key={igKey + i} type={igKey}/>
        })
    })
    .reduce((Array,el)=>{
        return Array.concat(el)
    },[])
    if(transformedIngrediants.length===0){
        transformedIngrediants = <p>Please Start Adding ingrediants</p>
    }
    // console.log(transformedIngrediants)
    return(
        <div className={classes.Burger}>
            <BurgerIngrediant type="bread-top"/>
            {transformedIngrediants}
            <BurgerIngrediant type="bread-bottom"/>
        </div>
    )
}

export default burger;