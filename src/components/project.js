import React from 'react';
import Image from 'gatsby-image';

const Link = props => {
  return (
    <a
      href={props.link}
      target="_blank"
      className="bg-green-500 hover:bg-green-600 text-white font-bold mr-2 py-2 px-4 rounded"
    >
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
    <div className="flex flex-col sm:flex-row shadow-custom mb-12 bg-white rounded-lg">
      <Image
        className="w-full rounded-lg rounded-br-none rounded-bl-none sm:rounded-bl-lg sm:rounded-tr-none sm:w-1/3 md:w-2/5 mr-12 sm:mr-6"
        fluid={props.image}
      />
      <div className="sm:w-2/3 md:w-3/5 py-12 px-6">
        <div className="flex flex-col sm:flex-row justify-between align-baseline mb-6 sm:mb-8">
          <div className="text-2xl">{props.name}</div>
          <div className="text-sm">
            <div>{date}</div>
            <div>{props.location}</div>
          </div>
        </div>
        <div className="mb-6">{props.description}</div>
        <div className="flex flex-wrap mb-6">
          {props.tags.map(tag => (
            <span className="text-gray-700 border-green-300 border-solid border-2 rounded px-2 py-1 mr-2 mb-2 text-sm">
              {tag}
            </span>
          ))}
        </div>
        {props.link ? <Link link={props.link} text="Voir" /> : null}
        {props.github ? <Link link={props.github} text="GitHub" /> : null}
      </div>
    </div>
  );
};

export default Project;
