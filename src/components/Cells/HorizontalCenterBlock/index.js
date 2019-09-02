import React from 'react';

const HorizontalCenterBlock = props => {
  const propClasses = props.className ? ' ' + props.className : '';
  return <div className={'h-center-block' + propClasses}>{props.children}</div>;
};

export default HorizontalCenterBlock;
