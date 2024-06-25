import { useState } from 'react';
import './ItemForm.css';
 import NewForm from './NewForm';
function ItemForm(props)
{ 


const[Ntitle,setTitle] = useState('')
// array return karta hai use case 
const[Ndate,setDate] = useState('')


function submitHandler(event)
{
 event.preventDefault();

 const fox={
   Title: Ntitle,
   Date:Ndate
 };
//  console.log(fox);
props.onSaveProduct(fox);

 setTitle('');
 setDate('');
}
 

// using object as input parameters Title and Date

// for handling many states
// const [inputOne,inputTwo]=useState({
//     title:'',
//     date:''
// })

   function DateChangeHandler(event)
    {
        console.log("kyuuuu nahi");
        setDate (event.target.value);  
      console.log(event.target.value);
//     //    console.log(title);
//     //    console.log(date);
   }

   function TitleChangeHandler(event)
    {  
//   let obj= {...prevState, Title:event.target.value};
// console.log(obj);                                               33,34,35 by using objects
// return obj;                                            
//         console.log("kyuuuu");
      setTitle(event.target.value);
   console.log(event.target.value);
// // event vala object use karke user se input lena
// // Ntitle jo line no. 5 me hai uski baat ho rahi
    }
   return(
    <NewForm onSubmit={submitHandler}>
    <div className='tittle'>
        <label>Title</label>
        <input type='text' value={Ntitle} onChange={TitleChangeHandler}></input>

    </div>
    <div className='datte'>
        <label>Date</label>
        <input type='date' value={Ndate} onChange={DateChangeHandler} min='2021-1-1' max='2021-1-4'></input>
        {/* Ndate mapped with  Date by using value={Ndate} */}
    </div>
    <div className='button'>
        <button type='submit'>add item</button>
    </div>
</NewForm>
   );
}


export default ItemForm;

// child se parent value pahuchani hai hai (lifting up)
// parent se child pahuchana ho to using props