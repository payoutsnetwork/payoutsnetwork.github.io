import React from 'react';

const Card = props => {
  const propClasses = props.className ? ' ' + props.className : '';
  return <div className={'card' + propClasses}>{props.children}</div>;
};

export default Card;
