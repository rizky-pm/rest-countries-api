import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

const Modal = ({ isOpen, closeModal, data }) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all text-veryDarkBlue space-y-4 font-sans-serif'>
                  <Dialog.Title
                    as='h3'
                    className='text-2xl font-bold leading-6'
                  >
                    {data?.name.official}
                  </Dialog.Title>
                  <img
                    className='w-full h-full box-shadow'
                    src={data?.flags.png}
                    alt={`Flag of ${data?.name.official}`}
                  />
                  <div className='mt-2 space-y-2 text-base'>
                    <p>
                      <span className='font-bold'>
                        Population
                        <br />
                      </span>{' '}
                      {data?.population}
                    </p>
                    <p>
                      <span className='font-bold'>
                        Region
                        <br />
                      </span>{' '}
                      {data?.region}
                    </p>
                    <p>
                      <span className='font-bold'>
                        Capital
                        <br />
                      </span>{' '}
                      {data?.capital}
                    </p>
                    <p>
                      <span className='font-bold'>
                        Subregion
                        <br />
                      </span>{' '}
                      {data?.subregion === undefined ? '-' : data?.subregion}
                    </p>
                    <div>
                      <span className='font-bold'>
                        Timezones
                        <br />
                      </span>
                      <div className='flex flex-wrap gap-1'>
                        {data?.timezones.map((timezone, index) => {
                          return (
                            <span
                              className='text-sm py-1 px-2 bg-lightDarkBlue/20  rounded'
                              key={index}
                            >
                              {timezone}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <div className='mt-4 flex items-center justify-between'>
                    <button
                      type='button'
                      className='inline-flex justify-center rounded-md border border-transparent bg-veryDarkBlue px-4 py-2 text-sm font-medium text-white hover:bg-lightDarkBlue/80 focus:outline-none transition'
                      onClick={closeModal}
                    >
                      Close
                    </button>

                    <a
                      href={data?.maps.googleMaps}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <svg
                        className='h-8 w-8 text-veryDarkBlue hover:text-lightDarkBlue/80 transition'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                        />
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                        />
                      </svg>
                    </a>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Modal;
