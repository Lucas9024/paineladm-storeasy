import React from 'react';
import "./ButtonSpace.scss";

const ButtonSpace = ({ Text, onClick }) => {
  return (
    <div className='btnContainer'>
      <button className='btn' onClick={onClick}>{Text}</button>
    </div>
  )
}

export default ButtonSpace
