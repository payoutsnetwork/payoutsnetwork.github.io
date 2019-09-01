import React from 'react';

const JustifyBlock = props => {
  const propClasses = props.className ? ' ' + props.className : '';
  return <div className={'justified-block' + propClasses}>{props.children}</div>;
};

export default JustifyBlock;
