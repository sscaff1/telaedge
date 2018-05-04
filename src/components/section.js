import React from 'react';

const Section = ({ header, children }) => (
  <div css={styles.container}>
    <h3 css={styles.h3}>{header}</h3>
    {children}
  </div>
);

const styles = {
  container: { marginTop: '2rem' },
  h3: {
    color: '#e06c75',
    fontSize: '1.9rem',
  },
};

export default Section;
