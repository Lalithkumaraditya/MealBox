import React from 'react';
import { useContext, useEffect, useState } from 'react'
import classes from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon'
import CartContext from '../../store/cart-context'
const HeaderCartButton = (props) => {
    const [btnEffect, setBtnEffect] = useState(false);
    const cartContext = useContext(CartContext);
    const {items}=cartContext
    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount
    }, 0);
    const btnClasses = `${classes.button} ${btnEffect ? classes.bump : ''}`;
    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBtnEffect(true);
       const timer= setTimeout(()=>{
        setBtnEffect(false)
        },300);
        return ()=>{
            clearTimeout(timer);
        }
    }, [items])
    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}><CartIcon /></span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    );
};

export default HeaderCartButton;