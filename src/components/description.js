import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import CV from './cv';

import github from '../../content/assets/images/logo/github.svg';
import linkedin from '../../content/assets/images/logo/linkedin.svg';

const Description = props => (
  <div className='flex flex-col mb-16 px-3 py-6 bg-white rounded-lg shadow-custom sm:p-6 sm:flex-row sm:items-start md:items-center'>
    <Image
      className='rounded-full mb-8 sm:mr-6 sm:mb-0 md:mr-12 sm:w-1/4'
      fluid={props.image}
    />
    <div className='sm:w-3/4'>
      Je m'appelle Romain Cascino et je suis ingénieur en informatique,
      spécialisé dans le développement web. J'ai obtenu mon diplôme en 2017 et
      j'ai rejoins MyScript, à Nantes, en tant que développeur web responsable
      des{' '}
      <a className='external-link' href='https://github.com/MyScript'>
        librairies front-end
      </a>{' '}
      et des{' '}
      <a className='external-link' href='https://webdemo.myscript.com'>
        webdemo
      </a>
      . En août 2018, je suis parti en Asie du sud-est lors d'un voyage en
      solitaire, pour prendre de temps et vivre de nouvelles expériences. Je
      reviens m'installer à Nantes en Janvier 2019 afin de travailler sur
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
      <div className='flex justify-center items-center mt-6 sm:justify-start'>
        <CV className='mr-2' />
        <a href='https://github.com/romaincscn'>
          <img className='w-8 mx-2' src={github} alt='GitHub icon'></img>
        </a>
        <a href='https://www.linkedin.com/in/romaincascino/'>
          <img className='w-8 mx-2' src={linkedin} alt='LinkedIn icon'></img>
        </a>
        <a href='mailto:contact@romaincascino.com'>
          <svg
            className='w-8 mx-2'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'>
            <g>
              <path fill='none' d='M0 0h24v24H0z' />
              <path
                fill='#5A67D8'
                d='M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z'
              />
            </g>
          </svg>
        </a>
      </div>
    </div>
  </div>
);

export default Description;
