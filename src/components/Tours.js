import React from 'react';
import TourCard from './TourCard';

function Tours({tours,notInterestedHandler})
{
    return(
        <div>
            <div>
              {
                 tours.map( (tour) =>{
                    return <TourCard {...tour} notInterestedHandler={notInterestedHandler}></TourCard>
                 })
                }
                {/* hamne tours ko map kar diya arrow function se aur har tour ko map kar diya uske corresponding card se
                {...tour} se  */}
            </div>
        </div>
    );
}

export default Tours;