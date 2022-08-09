import React from 'react';

const SearchBar = ({ setSearchQuery }) => {
  return (
    <div className='relative'>
      <input
        className='w-full md:w-1/2 lg:w-1/4 px-16 py-3 rounded-md outline-none bg-white text-darkGray box-shadow'
        type='text'
        name='searchCountry'
        id='searchCountry'
        placeholder='Search for a country...'
        onChange={(e) => {
          const query = e.target.value.toLocaleLowerCase();

          setSearchQuery(query);
        }}
      />
      <svg
        className='absolute top-1/2 -translate-y-1/2 left-8 h-4 w-4 text-darkGray'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        strokeWidth='2'
        stroke='currentColor'
        fill='none'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        {' '}
        <path stroke='none' d='M0 0h24v24H0z' />{' '}
        <circle cx='10' cy='10' r='7' />{' '}
        <line x1='21' y1='21' x2='15' y2='15' />
      </svg>
    </div>
  );
};

export default SearchBar;
