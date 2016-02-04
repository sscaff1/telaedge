import React from 'react';

const Sample = ({name,source,website,sourceCode}) => (
  <div className="col-sm-4 text-center sample-box">
    <div className="sample-image">
      <span className="helper"></span>
      <img src={source} className="center-block" />
    </div>
    <h3>
      {name}<br/>
      <small>
        {website ? (<span><a href={website} target="_blank">Website</a></span>) : ''}
        {sourceCode ? (<span> | <a href={sourceCode} target="_blank">Source Code</a></span>) : ''}
      </small>
    </h3>
  </div>
);


export const Samples = ({images}) => (
  <div className="sample-container text-center">
    <div className="row">
      {images.map(image => (
        <Sample key={image.name} name={image.name} source={image.source} website={image.website} sourceCode={image.sourceCode} />
      ))}
    </div>
  </div>
);
