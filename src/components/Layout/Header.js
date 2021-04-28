import React from 'react';
import iceCream from '../../assets/meals.jpeg';
import classes from './Heade.module.css'
import CartButton from './HeaderCartButton'
const Header = (props) => {
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>Meal Box</h1>
                <CartButton onClick={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={iceCream} alt="Ice Creams"/>
            </div>
        </React.Fragment>
    )
}
export default Header;