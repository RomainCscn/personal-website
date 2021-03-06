import React from 'react';
import cv from '../../content/assets/cv.pdf';
import resume from '../../content/assets/resume.pdf';

const CV = ({ className, i18n }) => (
  <a
    href={i18n.cv ? cv : resume}
    className={`${className} bg-indigo-300 hover:bg-indigo-400 text-indigo-800 font-bold py-2 px-2 rounded inline-flex items-center sm:px-4 no-underline`}>
    <svg
      className='fill-current w-4 h-4 mr-2'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 20 20'>
      <path d='M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z' />
    </svg>
    <span>{i18n.text}</span>
  </a>
);

export default CV;
