import React from 'react';
import Image from 'gatsby-image';
import Tag from './tag';
import github from '../../content/assets/images/logo/github-dark.svg';
import link from '../../content/assets/images/logo/link.svg';

const GitHubLink = props => {
  return (
    <a
      href={props.link}
      className={`${props.className} bg-indigo-300 hover:bg-indigo-400 text-indigo-800 font-bold mr-2 py-2 px-4 rounded inline-flex items-center`}>
      <img className='w-5 mr-2' src={github} alt='GitHub logo' />
      <span>GitHub</span>
    </a>
  );
};

const Link = props => {
  return (
    <a
      href={props.link}
      className={`${props.className} bg-indigo-300 hover:bg-indigo-400 text-indigo-800 font-bold mr-2 py-2 px-4 rounded inline-flex items-center`}>
      <img className='w-5 mr-2' src={link} alt='Link logo' />
      <span>Voir</span>
    </a>
  );
};

const Project = props => {
  const date =
    props.startDate === props.endDate
      ? props.startDate
      : `${props.startDate} – ${props.endDate}`;

  return (
    <div className='flex flex-col sm:flex-row shadow-custom mb-16 bg-white rounded-lg'>
      <Image
        className='w-full rounded-lg rounded-br-none rounded-bl-none sm:rounded-bl-lg sm:rounded-tr-none sm:w-1/3 md:w-2/5 mr-12 sm:mr-6'
        fluid={props.image}
      />
      <div className='sm:w-2/3 md:w-3/5 py-12 px-6'>
        <div className='flex flex-col sm:flex-row justify-between align-baseline mb-6 sm:mb-8'>
          <div className='text-2xl md:text-3xl font-semibold'>{props.name}</div>
          <div className='text-sm text-gray-600'>
            <div>{date}</div>
            <div>{props.location}</div>
          </div>
        </div>
        <div className='mb-6 text-base'>{props.description}</div>
        <div className='flex flex-wrap mb-6'>
          {props.tags.map(tag => (
            <Tag tag={tag} className='bg-gray-200 text-gray-800' />
          ))}
        </div>
        {props.link ? <Link link={props.link} /> : null}
        {props.github ? <GitHubLink link={props.github} /> : null}
      </div>
    </div>
  );
};

export default Project;
