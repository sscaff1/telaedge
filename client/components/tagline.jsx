import React from 'react';

export const TagLine = ({classNames,text}) => (
  <div className={classNames}>
    <div className="container text-center">
      <h2>{text}</h2>
    </div>
  </div>
);
