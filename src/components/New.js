import React from 'react';
import NewItem from './NewItem';
import NewCard from './NewCard';
import'./New.css'
const New =(props) => {
    return(
        <NewCard className="products">
            <NewItem 
            title= {props.items[0].title}
            amount ={props.items[0].amount}
             date = {props.items[0].date}
            />

             <NewItem 
            title= {props.items[1].title}
            amount ={props.items[1].amount}
             date = {props.items[1].date}
            />

             <NewItem 
            title= {props.items[2].title}
            amount ={props.items[2].amount}
             date = {props.items[2].date}
            />

             <NewItem 
            title= {props.items[3].title}
            amount ={props.items[3].amount}
            date = {props.items[3].date}
            />

            </NewCard>
          
    );
}

export default New;