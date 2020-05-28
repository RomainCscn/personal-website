import React from 'react';
import Image from 'gatsby-image';
import CV from './cv';

import github from '../../content/assets/images/logo/github.svg';
import linkedin from '../../content/assets/images/logo/linkedin.svg';

const Description = (props) => (
  <div
    className={`flex flex-col mb-16 px-3 py-6 rounded-lg shadow-custom sm:p-6 sm:flex-row sm:items-start md:items-center ${props.theme.primaryBg} ${props.theme.primaryText}`}>
    <Image
      className='rounded-full mb-8 sm:mr-6 sm:mb-0 md:mr-12 sm:w-1/4'
      fluid={props.image}
    />
    <div className='sm:w-3/4'>
      {props.i18n.description}
      <div className='flex justify-center items-center mt-6 sm:justify-start'>
        <CV i18n={props.i18n.resume} className='mr-2' />
        <a href='https://github.com/romaincscn'>
          <img className='w-8 mx-2' src={github} alt='GitHub icon'></img>
        </a>
        <a href='https://www.linkedin.com/in/romaincascino/'>
          <img className='w-8 mx-2' src={linkedin} alt='LinkedIn icon'></img>
        </a>
        <a href='mailto:contact@romaincascino.com'>
          <svg
            className='w-8 mx-2'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'>
            <g>
              <path fill='none' d='M0 0h24v24H0z' />
              <path
                fill='#5A67D8'
                d='M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z'
              />
            </g>
          </svg>
        </a>
      </div>
    </div>
  </div>
);

export default Description;
