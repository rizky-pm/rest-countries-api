import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Card from '../Card';
import SearchBar from '../SearchBar';
import Modal from '../Modal';

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState();

  const filteredCountries = countries?.filter((country) => {
    return country?.name.official.toLocaleLowerCase().includes(searchQuery);
  });

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = (countryData) => {
    setIsModalOpen(true);
    setSelectedCountry(countryData);
  };

  console.log(selectedCountry);

  const getCountries = async () => {
    setLoading(true);

    try {
      const res = await axios({
        method: 'get',
        url: 'https://restcountries.com/v3.1/all',
      });

      if (res.status === 200) {
        setCountries(res.data);
      }

      setLoading(false);
      console.log(res);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <main className='px-4 py-6 md:px-8 text-sm space-y-10'>
      <h1 className='text-xl font-bold'>REST Countries API</h1>
      <SearchBar setSearchQuery={setSearchQuery} />

      {loading && (
        <div className='flex justify-center items-center h-[70vh]'>
          <span className='text-xl font-bold'>Loading data ...</span>
        </div>
      )}

      <div className='flex flex-col md:flex-row md:flex-wrap items-center md:justify-center space-y-10 md:space-y-0 md:gap-5 lg:gap-10'>
        {!loading &&
          filteredCountries?.map((country, index) => {
            return (
              <Card
                key={index}
                openModal={openModal}
                data={country}
                flag={country?.flags.png}
                name={country?.name.official}
                population={country.population}
                region={country?.region}
                capital={country?.capital}
              />
            );
          })}
      </div>

      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        data={selectedCountry}
      />
    </main>
  );
};

export default Countries;
