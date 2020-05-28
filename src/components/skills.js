import React from 'react';
import Tag from './tag';

const Skills = (props) => {
  const skills = [
    'HTML/CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'React Native',
    'Vue.js',
    'Node.js',
    'Python',
    'Django',
    'Rust',
    'SQL',
    'NoSQL',
    'PostgreSQL',
  ];

  return (
    <div
      className={`mb-16 p-6 rounded-lg md:flex ${props.theme.primaryBg} ${props.theme.primaryText} ${props.theme.shadow}`}>
      <div>
        <h3 className='serif italic text-xl mb-6'>{props.i18n.skillsTitle}</h3>
        <div className='flex flex-wrap mb-6'>
          {skills.map((skill) => (
            <Tag
              key={skill}
              tag={skill}
              className={`${props.theme.secondaryBg} ${props.theme.blueTextAccent}`}
            />
          ))}
        </div>
      </div>
      <div>
        <h3 className='serif italic text-xl mb-6'>
          {props.i18n.softSkillsTitle}
        </h3>
        <div className='flex flex-wrap mb-6'>
          {props.i18n.softSkills.map((skill) => (
            <Tag
              key={skill}
              tag={skill}
              className={`${props.theme.secondaryBg} ${props.theme.greenTextAccent}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
