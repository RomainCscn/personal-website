import React from 'react';

import { ThemeContext } from '../context/theme';

const ThemeToggle = ({ theme }) => {
  const { colorMode, setColorMode } = React.useContext(ThemeContext);

  if (!colorMode) {
    return null;
  }

  return (
    <span
      role='button'
      tabIndex={0}
      className={`cursor-pointer ${theme.secondaryText}`}
      onClick={() => setColorMode(colorMode === 'dark' ? 'light' : 'dark')}
      onKeyPress={() => setColorMode(colorMode === 'dark' ? 'light' : 'dark')}>
      {colorMode === 'dark' ? 'Light' : 'Dark'}
    </span>
  );
};

export default ThemeToggle;
