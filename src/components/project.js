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
      <span>{props.buttonText}</span>
    </a>
  );
};

const Project = props => {
  const date =
    props.startDate === props.endDate
      ? props.startDate
      : `${props.startDate} – ${props.endDate}`;

  return (
    <div className='flex flex-col lg:flex-row max-w-lg lg:max-w-full lg:w-full shadow-custom mb-16 bg-white rounded-lg'>
      <Image
        imgStyle={{ objectFit: props.objectFit ? props.objectFit : 'cover' }}
        className='w-full rounded-lg rounded-br-none rounded-bl-none sm:rounded-bl-lg sm:rounded-tr-none lg:w-1/2 mr-12 sm:mr-6'
        fluid={props.image}
      />
      <div className='lg:w-1/2 py-10 px-6'>
        <div className='text-2xl md:text-3xl font-semibold'>{props.name}</div>
        <div className='flex flex-wrap justify-between text-sm text-gray-600 mb-6'>
          <div className='mr-4'>{date}</div>
          <div>{props.location}</div>
        </div>
        <div className='mb-6 text-base'>{props.description}</div>
        <div className='flex flex-wrap mb-6'>
          {props.tags.map(tag => (
            <Tag tag={tag} className='bg-gray-200 text-gray-800' />
          ))}
        </div>
        {props.link ? (
          <Link
            buttonText={props.lang === 'fr' ? 'Voir' : 'See'}
            link={props.link}
          />
        ) : null}
        {props.github ? <GitHubLink link={props.github} /> : null}
      </div>
    </div>
  );
};

export default Project;
