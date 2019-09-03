import React from 'react';

const Icon = props => {
  const propClasses = props.className ? ' ' + props.className : '';
  return (
    <span onClick={props.onClick} id={props.id} className={'icon' + propClasses}>
      {props.children}
    </span>
  );
};

export default Icon;
