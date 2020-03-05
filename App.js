import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { NavigationContainer } from '@react-navigation/native';

import reducers from './src/reducers';
import MainNavigation from './src/navigations/MainNavigation';

class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(thunk))}>
        <NavigationContainer>
          <MainNavigation />
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;
