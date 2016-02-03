import React from 'react';
import {TagLine} from './tagline.jsx';

const Service = ({thumb,title,text}) => (
  <div className="col-sm-6 text-center">
    <img className="center-block" src={thumb} height="250" />
    <h3 className="text-center">{title}</h3>
    <p className="text-justify service-text">
      {text}
    </p>
  </div>
);

export const Services = () => (
  <div className="container-fluid services-container">
    <div className="row">
      <Service thumb="/img/responsive.png" title="Website Design" text="Whether you need to update your website or create a new one from scratch, we can help you get up and running with an engaging, responsive, accessible website that is individualized for you. We can even create a wedding or special event website. Our websites are designed on free open-source platforms, which gives you the option of managing your own website. If you would like to be more involved in the process, we also provide training and assistance to help you manage your own content. We can code compliant and efficient html and css and can ensure that your site is always up to date."/>
      <Service thumb="/img/apps.png" title="Web and Mobile Applications" text="We design mobile-friendly web applications that are customized to help your business run more efficiently. These web applications are also built on free open-source platforms. The apps can help solve a wide range of issues, from Client Relationship Management (CRM) to customized calculators, and can help increase revenue and productivity."/>
    </div>
    <TagLine classNames="container-fluid" text="Please contact us for a quote or for more information on our services" />
  </div>
);
