import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null };
    componentDidMount() {
    const config = {
    apiKey: 'AIzaSyA1Mg5gKPMhk48oHL26kuMyTy8t9NINRqk',
    authDomain: 'auth-526ce.firebaseapp.com',
    databaseURL: 'https://auth-526ce.firebaseio.com',
    storageBucket: 'auth-526ce.appspot.com',
    messagingSenderId: '473131555504'
  };
  firebase.initializeApp(config);
  firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authencation" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;