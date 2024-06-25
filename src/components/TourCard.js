import { useState } from "react";



function TourCard({id,name,info,image,price,notInterestedHandler}) 
{   

    const[readmore , setReadMore] =useState(false);

    const description = readmore ? info : `${info.substring(0,200)}...` ;
    function readmoreHandler()
    {
        setReadMore(!readmore);
        // ye readmore ko true ya false me switch karva raha hai
    }
    return(
        <div className="card">
            <img src={image} className="image"></img>

            <div className="tour-info">

            <div className="Tour-Details">
                <h3 className="price">{price}</h3>
                <h4 className="naam">{name}</h4>
            </div>
            <div className="description">
                 {description}
<span className="readmore" onClick={readmoreHandler}>
    {readmore ? 'show less' : 'readmore'}
</span>
            </div>
  
            </div>
            <button className="not-int" onClick={() => notInterestedHandler(id)}>NOT INTERESTED</button>
            {/* arrow function in line no. 33 */}
        </div>
      
    )
}


export default TourCard;



//     Template Literal: The backticks (``) are used to create a template literal, which allows for embedding expressions inside a string.

// String Interpolation: ${info.substring(0,200)} is an example of string interpolation. The expression inside ${} is evaluated and its result is included in the string.

// substring Method: info.substring(0,200) extracts a portion of the info string, starting from index 0 up to, but not including, index 200.

// Concatenation: The extracted substring is concatenated with the ellipsis ("...") to indicate that the text continues beyond what is shown.