import React from 'react';

const LoadMore = props => {
  if (props.moreExist === true) {
    return (
      <a id="jestLoadMoreLink" href="#" onClick={props.onClick}>
        View More
      </a>
    );
  } else {
    return <></>;
  }
};

export default LoadMore;
