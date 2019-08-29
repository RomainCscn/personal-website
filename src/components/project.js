import React from 'react';
import Image from 'gatsby-image';

const Link = props => {
  return (
    <a
      href={props.link}
      target="_blank"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
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
    <div className="flex shadow-xl mb-12 bg-white rounded-lg">
      <Image className="w-2/5 mr-12" fluid={props.image} />
      <div className="w-3/5 py-12 px-6">
        <div className="text-xl">{props.name}</div>
        <div>{date}</div>
        <div>{props.location}</div>
        <div className="mb-6">{props.description}</div>
        {props.link ? <Link link={props.link} text="Voir" /> : null}
        {props.github ? <Link link={props.github} text="GitHub" /> : null}
      </div>
    </div>
  );
};

export default Project;
