import React, { useEffect } from "react";
import Navbar from "./Shopp/Navbar"
import Filter from "./Shopp/Filter"
import Cards from "./Shopp/Cards"
import {apiUrl, filterData, /*fit*/}  from "./Shopp/Data";
import {/*ToastContainer*/toast} from 'react-toastify';
import { useState } from "react";

const App = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
   const [category, setCategory] = useState(filterData[0].title) 

  async function fetchData(){
    setLoading(true);
    try{
      let response = await fetch(apiUrl);
      let output = await response.json();
      setCourses(output.data);
    }
    catch(error) {
      toast.error("Network has no issues"); 
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchData();
  },[])

  return (
  <div className="container">
    <div>
      <Navbar/>
    </div>
    <div className='filter'>
      <div>
        <Filter
          filterData = {filterData}
           category={category} 
           setCategory={setCategory} 
        />
      </div>
      <div className='spinn'>
        {
          loading?(<spinner/>) : (<Cards courses = {courses}  category={category} />)
        }
      </div>
    </div>
  </div>
)};

export default App;

