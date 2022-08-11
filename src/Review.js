import React, { useState } from 'react'
import people from './data'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Review = () => {
    const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const surprise = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };
   
  return (
    <main className='flex items-center justify-center flex-col mt-28  bg-white shadow-lg  h-auto w-96 mx-auto p-8'>
        <div className='flex items-center justify-center flex-col'>
            <div className='w-64 h-64'>
            <img className='w-full h-full rounded-full bg-no-repeat bg-center bg-cover' src={image} alt=''></img>
            </div>
            <div className='mt-4 capitalize font-bold '>
                <p>
                    {name}
                </p>
                <p className='text-indigo-600'>{job}</p>
            </div>
        </div>
        <div className='mt-4'>
            <p>{text}</p>
            <div className='mt-8 mx-auto flex items-center justify-center gap-4'>
                <button onClick={prevPerson} className='text-indigo-700'>
                    <FaChevronLeft/>

                </button>
                 <button onClick={nextPerson} className='text-indigo-700'>
                    <FaChevronRight/>
                    
                </button>
            </div>
        </div>
        <button onClick={surprise} className='bg-gray-200 text-indigo-600 py-2 px-4 mt-4' >Surprise me</button>
        
    </main>
  )
}

export default Review