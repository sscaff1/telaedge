import React from 'react';

const Pic = ({source}) => (
  <div className="col-sm-4 text-center">
    <img className="center-block" src={source} height="300" />
  </div>
);

export const Pics = () => (
  <div className="row text-center pic-row">
    <Pic source="/img/IMG_0342-1.jpg" />
    <Pic source="/img/pic2.jpg" />
    <Pic source="/img/pic3.jpg" />
  </div>
);
