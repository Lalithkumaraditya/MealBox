import {React,useRef,useState} from 'react';
import classes from './MealItemForm.module.css'
import Input from '../../UI/Input/Input'
const MealItemForm = (props) => {
   const [formIsValid,setFormIsValid] =useState(true)
   const amountInputRef= useRef()
    const submitHandler=event=>{
     event.preventDefault();
     const enteredAmount=amountInputRef.current.value;
     const enteredAmountNumber= +enteredAmount;
     if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5){
         console.log(enteredAmount+""+enteredAmountNumber)
         setFormIsValid(false);
          return;
     }
     props.onAddToCart(enteredAmountNumber);
    };
    return (
       <form className={classes.form} onSubmit={submitHandler}>
           <Input 
              ref={amountInputRef}
              label="Amount" 
               input={{
               id:'amount',
               type:'number',
               min:'1',
               max:'5',
               step:'1',
               defaultValue:'1'
           }} />
           <button>+ Add</button>
           {!formIsValid && <p>Please Enter a Valid Amount(1-5)</p>}
       </form>
    );
};

export default MealItemForm;