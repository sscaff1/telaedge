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
          {name: 'pediSpace', source:'/img/pedispace.jpg', website: 'http://pedispace.com/', sourceCode: 'https://github.com/sscaff1/pedispace'}, 
          {name: 'Modern Web', source: '/img/JS.png'},
          {name: 'Meteor', source: '/img/meteor.png'}
        ]} />
        <Samples images={[
            {name: 'React', source:'/img/react.png'},
            {name: 'Modern Web', source: '/img/JS.png'},
            {name: 'Meteor', source: '/img/meteor.png'}
          ]} />
    </div>
    <TagLine classNames="container-fluid black" text="Technologies I use" />
    <Samples images={[
      {name: 'React', source:'/img/react.png', website: 'https://facebook.github.io/react/', sourceCode: 'https://github.com/facebook/react'},
      {name: 'Modern Web', source: '/img/JS.png'},
      {name: 'Meteor', source: '/img/meteor.png', website: 'https://www.meteor.com/', sourceCode: 'https://github.com/meteor/meteor/'}
    ]} />
    <TagLine classNames="container-fluid black" text="Contact Us" />
    <ContactForm />
  </div>
);
