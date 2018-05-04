import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/header';
import './index.css';

const Layout = ({ children, data }) => {
  const { title, subTitle } = data.site.siteMetadata;
  return (
    <div css={styles.container}>
      <Helmet
        title={title}
        meta={[
          { name: 'description', content: subTitle },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <Header siteTitle={title} subTitle={subTitle} />
      <div css={styles.wrap}>{children()}</div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.func,
};

const styles = {
  container: {
    paddingBottom: '3rem',
  },
  wrap: {
    margin: '0 auto',
    paddingTop: 0,
    textAlign: 'center',
  },
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        subTitle
      }
    }
  }
`;
