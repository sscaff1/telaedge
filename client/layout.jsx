import React from 'react';
import {Header} from './container/header.jsx';
import {Footer} from './container/footer.jsx';

export const Layout = ({content}) => (
  <div>
    <Header />
    <div>
      {content}
    </div>
    <Footer />
  </div>
)
