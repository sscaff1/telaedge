import React from 'react';
import Link from 'gatsby-link';
import Section from '../components/section';
import ResumeSection from '../components/resumeSection';
import TechUsed from '../components/TechUsed';

const IndexPage = () => (
  <div>
    <p css={styles.mainParagraph}>
      Hi, I'm Steven, a senior JavaScript developer. I make mobile, web, and desktop applications
      using React & React Native!
    </p>
    <Section header="Technologies">
      <TechUsed />
    </Section>
    <Section header="Resume">
      <ResumeSection
        title="Founder/Developer"
        company="Tela Edge"
        dates="December 2011 - Present"
        location="New Orleans, LA"
      >
        <p>
          I've worked on a number of contracts throughout the years including top 100 e-commerce
          sites, Senator websites, non-profit CMS systems, React Native applications for small
          businesses, and maintainable websites for various size businesses.
        </p>
      </ResumeSection>
      <ResumeSection
        title="Team Lead/Senior Front-end Developer"
        company="Lamps Plus"
        dates="November 2016 - March 2018"
        location="Los Angeles, CA"
      >
        <ul css={styles.noWrap}>
          <li>Promoted to Team Lead after 3 months</li>
          <li>Led a scrum team of 5 and worked with product to deliver sprints on time</li>
          <li>Introduced Webpack to our customer facing website</li>
          <li>Helped mentor junior developers</li>
          <li>Built a CI/CD tool from the ground up using .NET Core and React</li>
        </ul>
      </ResumeSection>
      <ResumeSection
        title="Senior Software Engineer"
        company="Double Qliq"
        dates="March 2016 - November 2016"
        location="Los Angeles, CA"
      >
        <ul css={styles.noWrap}>
          <li>Wrote a social media application in React Native and FeathersJS</li>
          <li>Established best practices, linting rules, and application architecture</li>
          <li>Contributed to React Native and FeathersJS core</li>
          <li>Established scrum and helped establish our continuous deployment processes</li>
        </ul>
      </ResumeSection>
      <ResumeSection
        title="Full Stack Developer/Partner"
        company="Foodfully"
        dates="September 2015 - May 2017"
        location="Davis, CA"
      >
        <ul css={styles.noWrap}>
          <li>Built a mobile app using MeteorJS</li>
          <li>Wrote the front-end in React Native</li>
          <li>
            Tied in with multiple 3rd party back-ends to pull consistent, accurate information
          </li>
        </ul>
      </ResumeSection>
      <ResumeSection
        title="Production Control Manager"
        company="Laitram"
        dates="July 2012 - September 2015"
        location="New Orleans, LA"
      >
        <p>
          I ran the inventory, procurement, and planning departments. I was able to successfully
          take an old unpredictable manufacturing approach, and establish measurable, plannable
          practices.
        </p>
      </ResumeSection>
    </Section>

    <Section header="About Me">
      <p css={styles.aboutMe}>
        I have a BS in mathematics from Louisiana State University and an MBA from Tulane
        University. I spent a fair amount of time in manufacturing before taking the plunge to
        pursue a career in web development. I started Tela Edge in 2012, and now contract full-time
        for a living. Tela is small town in Honduras where I spent a lot of my childhood. I'm based
        out of New Orleans. Other than coding, I'm a husband, a dog lover, a rescue dad, a cyclist,
        and a sports fan.{' '}
        <strong>I'm currently available for part-time, remote contracting roles.</strong> Get
        in-touch and I can help make your website, app or business a reality.
      </p>
    </Section>
  </div>
);

const styles = {
  mainParagraph: {
    maxWidth: '85%',
    margin: '0 auto',
    fontSize: '1.9rem',
    lineHeight: '2.7rem',
    maxWidth: 1020,
  },
  noWrap: {
    whiteSpace: 'nowrap',
    listStyle: 'inside',
  },
  aboutMe: {
    maxWidth: 960,
    margin: 'auto',
  },
};

export default IndexPage;
