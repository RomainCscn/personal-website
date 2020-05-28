import React from 'react';
import { Link } from 'gatsby';

import { ThemeContext } from '../context/theme';
import { THEME } from '../styles/theme';

import HomeComponent from '../components/home';

const i18n = (theme) => ({
  hello: "Hi, I'm Romain Cascino ",
  introduction: (
    <div>
      <h2 className='text-2xl font-semibold'>
        French software engineer specialized in{' '}
        <span className={`font-bold ${theme.indigoTextAccent}`}>
          web development
        </span>
        .
      </h2>
      <h2 className='mt-4 text-xl font-semibold'>
        Currently based in Nantes (France) as a{' '}
        <span className={`font-bold ${theme.indigoTextAccent}`}>
          freelancer
        </span>
        .
      </h2>
      <Link
        to='/en/about'
        className='float-right mt-6 bg-indigo-300 hover:bg-indigo-400 text-indigo-800 font-bold py-2 px-4 rounded'>
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
