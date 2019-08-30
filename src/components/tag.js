import React from 'react';

const Tag = props => {
  return (
    <span className='bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
      {props.tag}
    </span>
  );
};

export default Tag;