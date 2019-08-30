import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import cv from '../../content/assets/cv.pdf';

const CV = () => (
  <a
    href={cv}
    target='_blank'
    class='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center'>
    <svg
      class='fill-current w-4 h-4 mr-2'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 20 20'>
      <path d='M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z' />
    </svg>
    <span>Télécharger mon CV</span>
  </a>
);

class About extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <SEO title='À propos' />
        <h2 className='text-xl'>À propos</h2>
        <p>
          Je m'appelle Romain Cascino et je suis ingénieur en informatique
          spécialisé dans le développement web. En 2017, j'obtiens mon diplôme
          et pars travailler à Nantes après une alternance d'un an chez Atos. Je
          rejoins MyScript en tant que développeur web où j'étais responsable
          des librairies front-end et en charge des démos web. En août 2018, je
          pars en Asie pour prendre le temps de développer de nouveaux projets.
          Je reviens m'installer à Nantes en Janvier 2019, travaille sur
          différents projets et commence mon activité de développeur web en
          freelance, en télétravail. À temps partiel, je supervise et
          j'accompagne des étudiants suivant le parcours développement web sur
          la plateforme OpenClassrooms afin de les former et de les guider vers
          le métier de développeur.
        </p>
        <p>
          Compétences et technologies utilisées : HTML/CSS, JavaScript,
          TypeScript, Vue.js, React, React Native, Python, Django, Rust, SQL,
          NoSQL, Rust, Java.
        </p>
        <p>
          Ce qu'on apprécie chez moi : Ma gestion des priorités, mon
          adaptabilité, mon autonomie, ma curiosité, mon empathie, mon ouverture
          d'esprit, mon sens du détail et mon attrait pour le design.
        </p>
        <p>
          J'occupe mon temps libre en lisant, en travaillant sur mes projets
          personnels, en randonnant ou en cuisinant pour mes amis. Le projet qui
          me rend le plus fier est EduCulture, une plateforme recensant les
          meilleures chaînes YouTube francophones culturelles et scientifiques.
        </p>
        <p>
          Actuellement disponible pour de nouveaux projets en tant que
          freelance.
        </p>
        <CV />
      </Layout>
    );
  }
}

export default About;
