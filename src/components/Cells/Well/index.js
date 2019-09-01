import React from 'react';

const Well = props => {
  const propClasses = props.className ? ' ' + props.className : '';
  return <div className={'well ' + propClasses}>{props.children}</div>;
};

export default Well;
