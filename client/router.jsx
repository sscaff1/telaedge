import React from 'react';
import {mount} from 'react-mounter';
import {Layout} from './layout.jsx';
import {Home} from './container/home.jsx';

FlowRouter.route('/', {
  action() {
    mount(Layout, {
      content: (<Home />),
    });
  }
});
