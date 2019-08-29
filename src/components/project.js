import React from 'react';

const Link = props => {
  return (
    <a
      href={props.link}
      target="_blank"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
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
    <div className="shadow-xl mb-12 bg-white rounded-lg p-4">
      <div className="text-xl">{props.name}</div>
      <div>{date}</div>
      <div>{props.location}</div>
      <div>{props.description}</div>
      {props.link ? <Link link={props.link} text="Voir" /> : null}
      {props.github ? <Link link={props.github} text="GitHub" /> : null}
    </div>
  );
};

export default Project;
