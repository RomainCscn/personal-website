import React from 'react';

const Tag = (props) => {
  return (
    <span
      className={`${props.className} rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2`}>
      {props.tag}
    </span>
  );
};

export default Tag;
