import React from 'react';
import Tag from './tag';

const Skills = props => {
  const skills = [
    'HTML/CSS',
    'JavaScript',
    'TypeScript',
    'Vue.js',
    'React',
    'React Native',
    'Python',
    'Django',
    'Rust',
    'Java',
    'SQL',
    'NoSQL',
  ];

  const softSkills = [
    'Ma gestion des priorités',
    'Mon adaptabilité',
    'Ma curiosité',
    'Mon empathie',
    'Mon sens du détail',
    'Mon attrait pour le design',
  ];

  return (
    <div className='mb-16 p-6 bg-white rounded-lg shadow-custom md:flex'>
      <div>
        <h3 className='text-xl font-bold mb-6'>Compétences techniques</h3>
        <div className='flex flex-wrap mb-6'>
          {skills.map(skill => (
            <Tag tag={skill} className='bg-gray-200 text-blue-700' />
          ))}
        </div>
      </div>
      <div>
        <h3 className='text-xl font-bold mb-6'>Ce qu'on apprécie chez moi</h3>
        <div className='flex flex-wrap mb-6'>
          {softSkills.map(skill => (
            <Tag tag={skill} className='bg-gray-200 text-green-700' />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
