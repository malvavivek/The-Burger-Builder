import React from 'react';
import Logo from '../../assests/images/burger-logo.png';
import classes from './Logo.css';

const logo= (props)=>(
    <div className={classes.Logo} style={{height:props.height}}>
        <img src={Logo} alt="Burger logo"/>
    </div>
)

export default logo;