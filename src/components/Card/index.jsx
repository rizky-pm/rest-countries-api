import React from 'react';

const Card = ({ openModal, data, flag, name, population, region, capital }) => {
  return (
    <div
      onClick={() => {
        openModal(data);
      }}
      className='w-4/5 md:w-[12.5rem] h-[20.3125rem] md:h-[18.75rem] lg:w-[14.0625rem] lg:h-[20.3125rem] rounded-md overflow-hidden box-shadow hover:-translate-y-2 hover:cursor-pointer transition'
    >
      <img
        src={flag}
        alt='Flag'
        className='w-full h-[9.375rem] md:h-[7.8125rem] lg:h-[9.375rem] border-b-2 border-veryDarkBlue/20'
      />
      <div className='p-4 flex flex-col justify-between'>
        <div className=' mb-4 h-10 md:h-14'>
          <h1 className='font-extrabold text-[.9375rem]'>{name}</h1>
        </div>

        <div>
          <p className='text-[.8125rem]'>
            <span className='font-extrabold'>Population :</span>{' '}
            {population.toLocaleString()}
          </p>
          <p className='text-[.8125rem]'>
            <span className='font-extrabold'>Region :</span> {region}
          </p>
          <p className='text-[.8125rem]'>
            <span className='font-extrabold'>Capital :</span> {capital}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
