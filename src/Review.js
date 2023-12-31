import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = new useState(0);
  const {name,job,image,text} = people[index];

const checkIndex =(index)=>{
if(index> people.length-1){
  return 0;
}
if(index < 0){
  return people.length-1;
}
return index;
}

const prevPeople = ()=>{
setIndex((index)=>{
  return checkIndex(index-1);
})
}

const nextPeople  = () =>{
  setIndex((index)=>{
    return checkIndex(index+1);
  })
}

const randomPeople=()=>{
  const randomNum = Math.floor(Math.random() * people.length-1);

  if(randomNum === index){
    setIndex(checkIndex(index+1));
  }
  setIndex(checkIndex(randomNum));
}

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img'/>
        <span className='quote-icon'>
          <FaQuoteRight/>
        </span>
      </div>
<h4 className='author'>{name}</h4>
<p className='job'>{job}</p>
<p className='info'>{text}</p>
<div className='button-container'>
  <button className='prev-btn' onClick={prevPeople}>
    <FaChevronLeft/>
  </button>
  <button className='next-btn'  onClick={nextPeople}>
    <FaChevronRight/>
  </button>
</div>
<button className='random-btn' onClick={randomPeople}>Surprise me</button>
</article>
  )
};

export default Review;
