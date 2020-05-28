import React from 'react';
import Image from 'gatsby-image';

const Hobbies = (props) => (
  <div
    className={`flex flex-col mb-16 p-3 rounded-lg sm:p-6 sm:flex-row sm:items-start md:items-center ${props.theme.primaryBg} ${props.theme.primaryText} ${props.theme.shadow}`}>
    <Image
      className='rounded-full mb-8 sm:mr-6 sm:mb-0 md:mr-12 sm:w-1/4'
      fluid={props.image}
    />
    <div className='sm:w-3/4'>
      <p className='serif text-xl italic mb-2'>{props.i18n.spareTimeTitle}</p>
      {props.i18n.spareTime}
    </div>
  </div>
);

export default Hobbies;
