import React from 'react';
import {Intro} from '../components/intro.jsx';
import {Pics} from '../components/pics.jsx';
import {TagLine} from '../components/tagline.jsx';
import {Services} from '../components/services.jsx';
import ContactForm from '../components/contact-form.jsx';
import {Samples} from '../components/samples.jsx';

export const Home = () => (
  <div>
    <Intro />
    <Pics />
    <TagLine classNames="container-fluid white" text="Tela Edge specializes in creating individualized, memorable, and user-friendly digital products. Our services include:" />
    <Services />
    <TagLine classNames="container-fluid black" text="Below is a sample of my work" />
    <div className="mywork-container">
      <Samples images={[
          {name: 'pediSpace', source:'/img/pedispacelogo.png', website: 'http://pedispace.com/', sourceCode: 'https://github.com/sscaff1/pedispace'},
          {name: 'CenturyTradeShow.com', source: '/img/centurytradeshow.png', website: 'http://www.centurytradeshow.com/', sourceCode: 'https://github.com/sscaff1/centurytradeshow'},
          {name: 'Foodfully', source: '/img/foodfully.png', website: 'http://foodful.ly/'}
        ]} />
        <Samples images={[
            {name: 'GainesIns.com', source: '/img/gainesinlogo.png', website: 'http://www.gainesins.com/'},
            {name: 'TedGaines.com', source:'/img/tedgaineslogo.jpg', website: 'http://www.tedgaines.com/'},
            {name: 'The Edge Tool', source: '/img/theedgetool.png', website: 'http://theedgetool.com/', sourceCode: 'https://github.com/sscaff1/eng_tasks'}
          ]} />
    </div>
    <TagLine classNames="container-fluid black" text="Technologies I use" />
    <div className="mytech-container">
      <Samples images={[
        {name: 'React', source:'/img/react.png', website: 'https://facebook.github.io/react/', sourceCode: 'https://github.com/facebook/react'},
        {name: 'Modern Web', source: '/img/JS.png'},
        {name: 'Meteor', source: '/img/meteor.png', website: 'https://www.meteor.com/', sourceCode: 'https://github.com/meteor/meteor/'}
      ]} />
    </div>
    <TagLine classNames="container-fluid black" text="Contact Me" />
    <div className="email-link">
      <a href="mailto:sscaff1@gmail.com">sscaff1@gmail.com</a>
    </div>
  </div>
);
