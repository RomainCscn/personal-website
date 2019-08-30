import React from 'react';
import Image from 'gatsby-image';
import Tag from './tag';

const Link = props => {
  return (
    <a
      href={props.link}
      className='bg-green-500 hover:bg-green-600 text-white font-bold mr-2 py-2 px-4 rounded'>
      {props.text}
    </a>
  );
};

const Project = props => {
  const date =
    props.startDate === props.endDate
      ? props.startDate
      : `${props.startDate} – ${props.endDate}`;

  return (
    <div className='flex flex-col sm:flex-row shadow-custom mb-12 bg-white rounded-lg'>
      <Image
        className='w-full rounded-lg rounded-br-none rounded-bl-none sm:rounded-bl-lg sm:rounded-tr-none sm:w-1/3 md:w-2/5 mr-12 sm:mr-6'
        fluid={props.image}
      />
      <div className='sm:w-2/3 md:w-3/5 py-12 px-6'>
        <div className='flex flex-col sm:flex-row justify-between align-baseline mb-6 sm:mb-8'>
          <div className='text-2xl md:text-3xl font-bold'>{props.name}</div>
          <div className='text-sm text-gray-600'>
            <div>{date}</div>
            <div>{props.location}</div>
          </div>
        </div>
        <div className='mb-6 text-base'>{props.description}</div>
        <div className='flex flex-wrap mb-6'>
          {props.tags.map(tag => (
            <Tag tag={tag} />
          ))}
        </div>
        {props.link ? <Link link={props.link} text='Voir' /> : null}
        {props.github ? <Link link={props.github} text='GitHub' /> : null}
      </div>
    </div>
  );
};

export default Project;
