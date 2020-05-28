import React from 'react';

import maltLogo from '../../content/assets/images/logo/malt.svg';

const i18n = {
  en: {
    project: 'A project? A need?',
    available: (
      <div className='mb-6'>
        I'm currently available as <span className='font-bold'>freelancer</span>
        .
      </div>
    ),
    notAvailable: (
      <div className='mb-6'>
        Currently <span className='font-bold'>in a mission</span>, you can still
        contact me for an upcoming mission!
      </div>
    ),
    malt: 'My Malt profile',
    contact: 'Contact me',
  },
  fr: {
    project: 'Un projet ? Un besoin ?',
    available: (
      <div className='mb-6'>
        Je suis actuellement disponible en{' '}
        <span className='font-bold'>freelance</span>.
      </div>
    ),
    notAvailable: (
      <div className='mb-6'>
        Actuellement <span className='font-bold'>en mission</span>, n'hésitez
        pas à me contacter pour une mission future !
      </div>
    ),
    malt: 'Mon profil Malt',
    contact: 'Me contacter',
  },
};

const Available = ({ lang, theme }) => {
  return (
    <div
      className={`inline-block mb-16 p-6 text-xl rounded-lg ${theme.primaryText} ${theme.greenBg} ${theme.shadow}`}>
      <div className='serif italic mb-3'>{i18n[lang].project}</div>
      {i18n[lang].notAvailable}
      <div>
        <a
          href='https://www.malt.fr/profile/romaincascino'
          className='bg-green-300 hover:bg-green-400 text-green-800 font-bold mr-4 mb-4 py-2 px-4 rounded inline-flex items-center no-underline'>
          <img className='w-6 h-6 mr-2' src={maltLogo} alt='Malt logo'></img>
          <span>{i18n[lang].malt}</span>
        </a>
        <a
          href='mailto:contact@romaincascino.com'
          className='bg-green-300 hover:bg-green-400 text-green-800 font-bold py-2 px-4 rounded inline-flex items-center no-underline'>
          <svg
            className='fill-current w-6 h-6 mr-2'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'>
            <g>
              <path fill='none' d='M0 0h24v24H0z' />
              <path d='M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z' />
            </g>
          </svg>
          <span>{i18n[lang].contact}</span>
        </a>
      </div>
    </div>
  );
};

export default Available;
