import React,{Component} from 'react';
import Aux from '../../hoc/auxiliary';
import Burger from "../../components/Burger/Burger";
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
const INGREDIANT_PRICES = {
    salad:0.5,
    meat:1.5,
    cheese:1,
    bacon:2
}
class BurgerBuilder extends Component {
    state = {
        ingrediants:{
            salad:0,
            meat:0,
            cheese:0,
            bacon:0
        },
        price:2
    }

    addIngrediantHandler = (type)=>{
        const oldCount = this.state.ingrediants[type];
        const updatedCount = oldCount + 1;
        const updatedIngrediants = {...this.state.ingrediants};
        updatedIngrediants[type] = updatedCount;
        const price = this.state.price;
        const updatedPrice = price + INGREDIANT_PRICES[type];
        this.setState({price:updatedPrice,ingrediants:updatedIngrediants})
    }
    removeIngrediantHandler = (type)=>{
        if(this.state.ingrediants[type]!==0){
            const updatedCount = this.state.ingrediants[type] - 1;
            const updatedIngrediants = { ...this.state.ingrediants};
            updatedIngrediants[type] = updatedCount;
            const updatedPrice =  this.state.price - INGREDIANT_PRICES[type];
            this.setState({price:updatedPrice,ingrediants:updatedIngrediants})
        }
        
    }
    render(){
        return(
        <Aux>
           <Burger ingrediants={this.state.ingrediants}/>
            <BuildControls ingrediantAdded = {this.addIngrediantHandler} ingrediantDeleted={this.removeIngrediantHandler}/>
        </Aux>
        )  
    }
   
}

export default BurgerBuilder;