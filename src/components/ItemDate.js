import React from 'react';

import './ItemDate.css'


// function ItemDate()
// { const day=12;
//     const mon=10;
//     const year=2003;
// // assume ye data kisi api caal se aaya hai to usse kaise use karna hai return() me
// // dynamic updation of data

//     return(<div className="date">
//       <span>{day}</span>
//       <span>{mon}</span>
//       <span>{year}</span>
//     </div>)

// }



const ItemDate = (props) =>
{
    const month=props.date.toLocaleString('en-US', { month:'long' });
    const day=props.date.toLocaleString('en-US', { day:'2-digit' });
    const year=props.date.getFullYear();
// assume ye data kisi api caal se aaya hai to usse kaise use karna hai return() me
// dynamic updation of data

    return(<div className="date">
    
     <div className='monthh'>{month}</div>
     <div className='dayy'>{day}</div>
     <div className='yearr'>{year}</div>
    </div>);

};

export default ItemDate;