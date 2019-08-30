import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import CV from './cv';

const Description = props => (
  <div className='flex flex-col mb-16 px-3 py-6 bg-white rounded-lg shadow-custom sm:p-6 sm:flex-row sm:items-start md:items-center'>
    <Image
      className='rounded-full mb-8 sm:mr-6 sm:mb-0 md:mr-12 sm:w-1/4'
      fluid={props.image}
    />
    <div className='sm:w-3/4'>
      Je m'appelle Romain Cascino et je suis ingénieur en informatique,
      spécialisé dans le développement web. J'obtiens mon diplôme en 2017 et
      rejoins MyScript, à Nantes, en tant que développeur web responsable des{' '}
      <a className='external-link' href='https://github.com/MyScript'>
        librairies front-end
      </a>{' '}
      et des{' '}
      <a className='external-link' href='https://webdemo.myscript.com'>
        webdemo
      </a>
      . En août 2018, je pars en Asie pour prendre du temps et me consacrer à de
      nouvelles expériences. Je reviens m'installer à Nantes en Janvier 2019
      afin de travailler sur
      <Link className='internal-link' to='/projects'>
        {' '}
        mes projets
      </Link>{' '}
      et de commencer mon activité de développeur web en freelance. À temps
      partiel, je supervise et j'accompagne des étudiants sur le{' '}
      <a
        className='external-link'
        href='https://openclassrooms.com/fr/paths/48-developpeur-web-junior'>
        parcours développement web
      </a>{' '}
      de la plateforme OpenClassrooms.
      <div className='flex justify-center sm:justify-start'>
        <CV className='mt-6' />
      </div>
    </div>
  </div>
);

export default Description;
