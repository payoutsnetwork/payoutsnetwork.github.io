import React from 'react';

const Icon = props => {
  const propClasses = props.className ? ' ' + props.className : '';
  return (
    <span onClick={props.onClick} className={'icon' + propClasses}>
      {props.children}
    </span>
  );
};

export default Icon;
