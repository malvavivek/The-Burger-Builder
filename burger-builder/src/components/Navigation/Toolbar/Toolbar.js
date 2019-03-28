import React from 'react';
import classes from './Toolbar.css';
import LOGO from '../../Logo/Logo';
import NavigationItem from '../NavigationItems/NavigationItems';

const toolbar = (props)=>(
     <header className={classes.Toolbar}>
        <div>MENU</div>
        <LOGO height="80%"/>
        <nav className={classes.DesktopOnly}>
            <NavigationItem />
        </nav>
    </header>
);

export default toolbar;