import React from 'react';
import classes from './AvailableMeals.module.css'
import Card from '../UI/Card/Card'
import MealItem from './MealItem/MealItem'
const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Mutton Biriyani',
        description: 'Ritha, Bone Soup',
        price: 330,
    },
    {
        id: 'm2',
        name: 'Chicken Biriyani',
        description: 'Chicken, Ritha, Curry',
        price: 200,
    },
    {
        id: 'm3',
        name: 'Prawn Biriyani',
        description: 'Fish, Ritha, Curry',
        price: 300,
    },
    {
        id: 'm4',
        name: 'Veg Biriyani',
        description: 'Vegitable fry Ritha, Curry',
        price: 150,
    },
];
const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map(meals => 
    <MealItem
    key={meals.id} 
    id={meals.id}
    name={meals.name}
    description={meals.description}
    price={meals.price}
    />);
    return (
        <section className={classes.meals}>
            <Card><ul>{mealsList}</ul></Card>
           

        </section>
    );
};

export default AvailableMeals;