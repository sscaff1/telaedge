import React from 'react';

const Sample = ({name,source,website,sourceCode}) => (
  <div className="col-sm-4 text-center">
    <img src={source} height="200" className="center-block" />
    <h3>
      {name}<br/>
    {website ? (<small>(<a href={website} target="_blank">Website</a> | <a href={sourceCode} target="_blank">Source Code</a>)</small>) : ''}
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
