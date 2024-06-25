// in react till now we have done fuction-based programming
// second method is class based programming-lifecycle method


// 6.useEffect

// import { useEffect,useState } from 'react';
// import './App.css';

// const App = () => {
//   const[text,setText] = useState('');
//   const[name,setName] = useState('');


// // useEffect ( () => {
// // console.log("ui rendering done");
// // });
// // har ak render pe kuch karna hai to useEffect se handle kar sakte hai


// // variation-2 is to get first render
// // useEffect ( () => {
// //   console.log("ui rendering done");
// //   },[]);
//   // ak empty array ya dependency list pass kar diya as 2nd parameter(24-06-24)


// // variation-3 is to get whenever dependency changes
// useEffect ( () => {
//   console.log("change");
//   },[text]);
// // useEffect change tab hoga jab text change hoga



// // variation-4 is to handle unmounting of the component(unmounting of the component means whwn the component is removed from the DOM for example when the component is not rendered due to some changes like application's or routing)
// // ak element hai uspe onChange per humne eventlistener lagaya agar 100 bar change karne padh 100 event listeners ho jaenge tabhi hume previous vala hatana padega tabhi next listerner lgana padega thats cleaning 

// useEffect ( () => {
// //  event listener added
// console.log("listener added");
// return() => {
//   console.log("listener removed");  
//   // for cleaning 
// }
//   },[text]);
// // ye code run tab hoga ab text ki value change hogi 
// // hook variable ki state ko handle karna aur changed value ui pe bhi render ho
// // use state [ variable ki value,variable ki value update karne ke liye function]
// // agar koi kaam karwvana chate ho component ke render hone ke baad to useState use karo

// // https request 
// // api call ye sab useEffect
// // parameters passed are callback function hota hai ki aap karna kya chahte ho aur next ak array ya ak list hoti hai dependency list (kin values ke change hone par sideeffect aap run karvana chahte hai)
// // agar tumhare component ke normal flow of execution ke alawa tum kuch additional task (sideEffect)karna chahte ho to sideEffect ko handlekarne ke liye hum ak hook useEffect use karte hai
// // state-value
// // useEffect-flow of task handle karna 
// // component mount hona matlab component ko render karna dom pe
//   function changeHandler(event)
//   {  
//      console.log(text);
//         // text se value nikalvana
//     setText(event.target.value);
//   }
//  return(
//   <div>
//     <label>Title</label>
//     <input type='text' onChange={changeHandler}></input>
//   </div>
//  )
// };

// export default App;







// 5.
// import './App.css';
// import Data from './components/Data';
// import Tours from './components/Tours';
// const App = () => {
 
//  const[tours , setTours] = useState(Data);

//  function notInterestedHandler(id)
//  {
       
//   const newTours = tours.filter(tour => tour.id !== id);
//   setTours(newTours);
//  }     
// //  newTours naam ka object banaya usme jab id same ni hui to newtours me daal do
// if(tours.length ===0)
//   {
//     return(
//       <div className='refresh'>
//         <h2>NO TOURS LEFT</h2>
//         <button onClick = {() => setTours(Data)}>REFRESH</button>
//         {/* vapas data daaldo */}
//       </div>
//     )
//   }

//   return(
//   <div>
//     <h1>PLAN WITH LOVE</h1>
//    <Tours tours={tours} notInterestedHandler ={notInterestedHandler}></Tours>
//    {/* the prop is tours jisme we passed the function {tours} */}
//   </div>

//  )
// };







// 4.
// increment and decrement operator
// const App = () => {
//   const[count , setCount] =useState(0);

//   function decreaseHandler()
//   {  setCount(count-1);

//   }
//   function increaseHandler()
//   {  setCount(count+1);

//   }
// function resetHandler()
// {
//   setCount(0);
// }
   
// return (
//   <div className='top-level-div'>

//     <div className='idd'>
//       <h1>Increment and Decrement</h1>
//       </div>

//       <div className='mm'>
//     <div className='buttons' >
//       <button onClick={decreaseHandler}>-</button>
//       <div className='countt'>
//        {count}
//        {/* count ko ui pe dikhana */}
//       </div>
//       <button onClick={increaseHandler}>+</button>
//     </div>
//     </div>

//     <div className='reset'>
//     <button onClick={resetHandler}>Reset</button>
//     </div>

//   </div>
// );
// }





// 3.
// import NewForm from './components/NewForm';
// import New from './components/New';
// const App = () => {
//   const products= [
  
//     {
//       id: 'p1',
//     title:'burger',  
//     amount:100,
//      date: new Date(2021,1,1),
  
//     },
//     {
//       id: 'p2',
//       title:'roll',
//       amount:200,
//        date: new Date(2021,2,2),
//       },
//       {
//         id: 'p3',
//         title:'fries',
//         amount:300,
//          date: new Date(2021,3,1),
//         },
//         {
//            id: 'p4',
//           title:'maggi',
//           amount:400,
//           date: new Date(2021,4,1),
//           },
//   ];
//   function printProductionData (data)
  
//   {
//   console.log(data);
//   console.log("pranay ke anadr");
//   }
//   return (
//     <div>
//     <NewForm pranay ={printProductionData}/>
//     {/* prop function pass kr diya */}
//       < New items={products}/>
//     </div>
//     );
//   }




// 2.
// passing the function
// using props

// return (
//   <div>
//    <Cards>
//    <ItemDate></ItemDate>
//       <Item>
//         kaise ho
//       </Item>
  
//       <ItemDate  day="19" mon="1" year="2003"></ItemDate>
//       <Item name={response[0].itemName}></Item>
  
//       <ItemDate  day={response[1].itemDay} mon="1" year="2004"></ItemDate>
//       <Item name="tide"></Item>
  
//       <Item name={washingPowder}></Item>
  
//       <div className="App">
//          <h1>Hello</h1>
//       </div>
//    </Cards>
//       </div>
//     );

    // isse Cards component ke andar jo bhi children hai vo ui per show ho jaengi




// 1.

  //   const washingPowder="surfexel";

  //   const response = [
  //   {
  //     itemName:"ggg",
  //     itemDate:"8998",
  //     itemMonth:"dec"
  
  //   },
  //   {
  //     itemName1:"g",
  //     itemDate1:"8",
  //     itemMonth1:"d",
  //      itemDay:"monday"
  //   }
  // ];
  //   return (
  // <div>
  //   <ItemDate></ItemDate>
  //     <Item>
  //       kaise ho
  //     </Item>
  
  //     <ItemDate  day="19" mon="1" year="2003"></ItemDate>
  //     <Item name={response[0].itemName}></Item>
  
  //     <ItemDate  day={response[1].itemDay} mon="1" year="2004"></ItemDate>
  //     <Item name="tide"></Item>
  
  //     <Item name={washingPowder}></Item>
  
  //     {/* <div className="App">
  //        <h1>Hello</h1>
  //     </div> */}
  //     </div>
  //   );

  
