import React from 'react';

import { ThemeContext } from '../context/theme';

import Moon from './icons/Moon';
import Sun from './icons/Sun';

const ThemeToggle = ({ theme }) => {
  const { colorMode, setColorMode } = React.useContext(ThemeContext);

  if (!colorMode) {
    return null;
  }

  return (
    <>
      <span
        role='button'
        tabIndex={0}
        className={`outline-none cursor-pointer ${theme.secondaryText}`}
        onClick={() => setColorMode(colorMode === 'dark' ? 'light' : 'dark')}
        onKeyPress={() =>
          setColorMode(colorMode === 'dark' ? 'light' : 'dark')
        }>
        {colorMode === 'dark' ? (
          <Sun className={`-mb-1 h-6 fill-current ${theme.secondaryText}`} />
        ) : (
          <Moon className={`-mb-1 h-6 fill-current ${theme.secondaryText}`} />
        )}
      </span>
    </>
  );
};

export default ThemeToggle;
