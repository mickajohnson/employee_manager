import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDEbFZgDM1AvxuoA5a1o6uJXi3GY6X8S-0',
      authDomain: 'manager-237bf.firebaseapp.com',
      databaseURL: 'https://manager-237bf.firebaseio.com',
      projectId: 'manager-237bf',
      storageBucket: 'manager-237bf.appspot.com',
      messagingSenderId: '925617060407'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
