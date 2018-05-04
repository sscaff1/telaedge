import React from 'react';
import react from '../assets/react-logo.svg';
import node from '../assets/Node.js_logo.svg';
import javascript from '../assets/javascript-logo.svg';
import modern from '../assets/modern web.svg';
import reason from '../assets/reason.jpg';

const TechUsed = () => (
  <div css={styles.container}>
    <img src={modern} alt="CSS3 and HTML5" css={styles.img} />
    <img src={react} alt="ReactJS" css={styles.img} />
    <img src={javascript} alt="JavasScript ❤️" css={styles.img} />
    <img src={node} alt="NodeJS" css={styles.img} />
    <img src={reason} alt="ReasonML" css={styles.img} />
  </div>
);

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    width: '100vw',
    padding: '1.5rem',
  },
  img: {
    maxWidth: '15%',
    margin: 0,
  },
};

export default TechUsed;
