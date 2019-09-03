import React from 'react';

import maltLogo from '../../content/assets/images/logo/malt.svg';

const Available = props => {
  return (
    <div className='inline-block mb-16 p-6 text-xl text-gray-800 bg-green-100 rounded-lg shadow-custom'>
      <div className='serif italic mb-3'>Un projet ? Un besoin ?</div>
      <div className='mb-6'>
        Je suis actuellement disponible en{' '}
        <span className='font-bold'>freelance</span>.
      </div>
      <div>
        <a
          href='https://www.malt.fr/profile/romaincascino'
          className='bg-green-300 hover:bg-green-400 text-green-800 font-bold mr-4 mb-4 py-2 px-4 rounded inline-flex items-center'>
          <img className='w-6 h-6 mr-2' src={maltLogo} alt='Malt logo'></img>
          <span>Mon profil Malt</span>
        </a>
        <a
          href='mailto:contact@romaincascino.com'
          className='bg-green-300 hover:bg-green-400 text-green-800 font-bold py-2 px-4 rounded inline-flex items-center'>
          <svg
            className='fill-current w-6 h-6 mr-2'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'>
            <g>
              <path fill='none' d='M0 0h24v24H0z' />
              <path d='M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z' />
            </g>
          </svg>
          <span>Me contacter</span>
        </a>
      </div>
    </div>
  );
};

export default Available;
