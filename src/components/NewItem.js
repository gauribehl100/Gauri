
import React,{useState} from 'react';
import ItemDate from './ItemDate';
import NewCard from './NewCard';
import './NewItem.css';

const NewItem =(props) =>
    {  
       
       const [title, setTitle] =useState(props.title);
// value of variable,function changing that value
        function clickHandler()
        { 
            setTitle("popcorn");
            console.log("button clicked");
        }
        return(
            <NewCard> 
                <div className="total">
                <div className="product-item">
             <ItemDate date={props.date}/>
             </div>
           <div class="description">
            <h2>{title}</h2>
           </div>
           <button onClick={clickHandler}>Click here</button>
</div>
            </NewCard>
        );
    }

    export default NewItem;

    // addition of props se event handling and based on declarative approach 
    //button vale clickHandler me clickHandler() bracket ni aayega kyunki 4 baari call chali jeagi 
    // react ka dom model ak baar render karta hai ui aur agar kisi cheez ki value change karke usse ui pe show karna hai to use STATE
    // state change is per component-instance based
//     // Why const?:

// Immutability of references: const ensures that the reference to count and setCount cannot be reassigned to something else. This helps prevent bugs by maintaining a consistent reference to these variables.
// Readability: Using const makes it clear that these variables should not be reassigned, improving code readability and maintainability.
// State Management:

// Although const is used, it’s important to note that the state itself is not immutable. The value of count can change over time when setCount is called, but the reference to count and setCount remains constant.
// In Summary
// Using const with useState helps ensure that the state variable and the updater function are not accidentally reassigned, which aligns with React's functional programming principles. It keeps the code more predictable and easier to understand.

// useeffect hook used when immediate change of state is needed




