import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentDidMount() {
    const config = {
    apiKey: 'AIzaSyA1Mg5gKPMhk48oHL26kuMyTy8t9NINRqk',
    authDomain: 'auth-526ce.firebaseapp.com',
    databaseURL: 'https://auth-526ce.firebaseio.com',
    storageBucket: 'auth-526ce.appspot.com',
    messagingSenderId: '473131555504'
  };
  firebase.initializeApp(config);
  }
  render() {
    return (
      <View>
        <Header headerText="Authencation" />
        <LoginForm />
      </View>
    );
  }
}

export default App;