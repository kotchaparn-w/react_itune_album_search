import PropTypes from 'prop-types';
import React from 'react';
import MainHeader from './containers/MainHeader';

const App = props => (
  <div>
    <MainHeader />
    { props.children }
  </div>
);

App.propTypes = {
  children: PropTypes.element.isRequired,
};

export default App;
