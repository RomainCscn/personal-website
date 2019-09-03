import React from 'react';
import Image from 'gatsby-image';

const Hobbies = props => (
  <div className='flex flex-col mb-16 p-3 bg-white rounded-lg shadow-custom sm:p-6 sm:flex-row sm:items-start md:items-center'>
    <Image
      className='rounded-full mb-8 sm:mr-6 sm:mb-0 md:mr-12 sm:w-1/4'
      fluid={props.image}
    />
    <div className='sm:w-3/4'>
      <p className='serif text-xl italic mb-2'>Dans mon temps libre</p>
      <p className='mb-2'>
        J'aime lire sur des sujets variés (philosophie, sciences, écologie,
        psychologie, numérique, etc.) afin d'approfondir mes connaissances et
        m'ouvrir à de nouveaux sujets. Je prends le temps de créer et de
        travailler sur des projets personnels.
      </p>
      <p>
        Quand je le peux, j'aime partir randonner, camper et m'immerger en
        pleine nature. J'apprécie également cuisiner, seul ou pour mes amis.
      </p>
    </div>
  </div>
);

export default Hobbies;
