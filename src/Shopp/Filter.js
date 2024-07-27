import React from 'react'

const Filter = (props) => {
  let filterData = props.filterData;
  let setCategory = props.setCategory;
  function filterHandler (title) {
    setCategory(title);
    } 
  return (
    <div className='filterr'>
        {filterData.map((data) => (
            <button
             className='filterdata'
             key={data.id}
            onClick={ () => filterHandler(data.title)}
             >{data.title}
            </button>
        ))}
    </div>
  )
}

export default Filter;
