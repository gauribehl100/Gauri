import React from 'react';
import './NewForm.css';
import ItemForm from './ItemForm';
function NewForm(props)
{   function saveProduct(product)
  {
    console.log("i am inside newform");
    console.log(product);
    // calling the parent function
    props.pranay(product);
  }

   return(
  <div className='formm'> 
    <ItemForm onSaveProduct ={saveProduct} />
  </div>
   );
}


export default NewForm;
// label tag tells the user that what value should be entered in the input tag


