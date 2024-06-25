import React from 'react';

import './NewCard.css';

const NewCard = (props) => {
  const classes = 'card ' + props.className;
  return <div className={classes}> {props.children}</div>;
};


export default NewCard;