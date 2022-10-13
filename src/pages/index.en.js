import React from 'react';
import { Link } from 'gatsby';

import { ThemeContext } from '../context/theme';
import { THEME } from '../styles/theme';
import swile from '../../content/assets/images/swile.png';

import HomeComponent from '../components/home';

const i18n = (theme) => ({
  hello: "Hi, I'm Romain Cascino ",
  introduction: (
    <div>
      <h2 className='text-2xl font-semibold'>
        French software engineer specialized in{' '}
        <span className={`font-bold ${theme.indigoTextAccent}`}>
          full stack web development
        </span>
        .
      </h2>
      <h2 className='mt-4 text-xl font-semibold flex'>
        Currently at
        <a
          href='https://www.swile.co/en'
          className={`flex items-center font-bold ${theme.indigoTextAccent} mr-1`}>
          <img src={swile} alt='Swile logo' className='w-6 h-6 ml-2 mr-1' />
          Swile
        </a>{' '}
        in full remote.
      </h2>
      <Link
        to='/en/about'
        className='float-right mt-6 bg-indigo-300 hover:bg-indigo-400 text-indigo-800 font-bold py-2 px-4 rounded no-underline'>
        More information
      </Link>
    </div>
  ),
  lastProject: 'My last project',
  allProjects: 'See all my projects',
});

const Home = ({ location }) => {
  const { colorMode } = React.useContext(ThemeContext);
  const theme = THEME[colorMode] || THEME.light;

  return (
    <HomeComponent lang='en' i18n={i18n} location={location} theme={theme} />
  );
};

export default Home;
