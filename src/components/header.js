import React from 'react';
import Link from 'gatsby-link';

const Header = ({ siteTitle, subTitle }) => (
  <div css={styles.container}>
    <h1 css={styles.h1}>{siteTitle}</h1>
    <h2 css={styles.h2}>{subTitle}</h2>
  </div>
);

const styles = {
  container: {
    margin: '0 auto',
    padding: '1.45rem 1.0875rem',
    textAlign: 'center',
  },
  h1: { marginBottom: 0, fontSize: '3.5em' },
  h2: { marginTop: 0, fontVariant: 'small-caps', fontSize: '1.8rem' },
};

export default Header;
