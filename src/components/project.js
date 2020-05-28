import React from 'react';
import Image from 'gatsby-image';

import Tag from './tag';
import githubImage from '../../content/assets/images/logo/github-dark.svg';
import linkImage from '../../content/assets/images/logo/link.svg';

const createLink = (text, theme) => {
  const textLink = text.substring(
    text.indexOf('[') + 1,
    text.indexOf(']', text.indexOf('[') + 1)
  );
  const link = text.substring(
    text.indexOf('(') + 1,
    text.indexOf(')', text.indexOf('[') + 1)
  );
  return (
    <a className={`${theme.indigoTextAccent}`} href={link}>
      {textLink}
    </a>
  );
};

const GitHubLink = ({ link, className }) => (
  <a
    href={link}
    className={`${className} bg-indigo-300 hover:bg-indigo-400 text-indigo-800 font-bold mr-2 py-2 px-4 rounded inline-flex items-center`}>
    <img className='w-5 mr-2' src={githubImage} alt='GitHub logo' />
    <span>GitHub</span>
  </a>
);

const Link = ({ link, className, buttonText }) => (
  <a
    href={link}
    className={`${className} bg-indigo-300 hover:bg-indigo-400 text-indigo-800 font-bold mr-2 py-2 px-4 rounded inline-flex items-center`}>
    <img className='w-5 mr-2' src={linkImage} alt='Link logo' />
    <span>{buttonText}</span>
  </a>
);

const Project = ({
  startDate,
  endDate,
  name,
  theme,
  image,
  collaboration,
  location,
  description,
  lang,
  objectFit,
  tags,
  link,
  github,
}) => {
  const date = startDate === endDate ? startDate : `${startDate} – ${endDate}`;

  return (
    <div
      className={`flex flex-col lg:flex-row max-w-lg lg:max-w-full lg:w-full mb-16 rounded ${theme.primaryBg} ${theme.primaryText} ${theme.shadow}`}>
      <Image
        imgStyle={{ objectFit: objectFit ? objectFit : 'cover' }}
        className='w-full rounded-lg rounded-br-none rounded-bl-none sm:rounded-bl-lg sm:rounded-tr-none lg:w-1/2 mr-12 sm:mr-6'
        fluid={image}
      />
      <div className='lg:w-1/2 py-10 px-6'>
        <div className='flex flex-wrap items-baseline justify-between'>
          <div className='text-2xl md:text-3xl font-semibold'>{name}</div>
          {collaboration && (
            <div className={`text-sm ${theme.secondaryText}`}>
              {collaboration.split('[')[0]}
              {createLink(collaboration, theme)}
            </div>
          )}
        </div>
        <div
          className={`flex flex-wrap justify-between text-sm mb-6 ${theme.secondaryText}`}>
          <div className='mr-4'>{date}</div>
          <div>{location}</div>
        </div>
        <div className='mb-6 text-base'>{description}</div>
        <div className='flex flex-wrap mb-6'>
          {tags.map((tag) => (
            <Tag
              key={tag}
              tag={tag}
              className={`${theme.secondaryBg} ${theme.primaryText}`}
            />
          ))}
        </div>
        {link ? (
          <Link
            className='no-underline'
            buttonText={lang === 'fr' ? 'Voir' : 'See'}
            link={link}
          />
        ) : null}
        {github ? <GitHubLink link={github} /> : null}
      </div>
    </div>
  );
};

export default Project;
