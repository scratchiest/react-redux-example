import React, { Component } from 'react';
import './App.css';

import { Provider } from 'react-redux'
import store from './redux/store'

import Posts from './components/Posts'
import PostForm from './components/PostForm'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <PostForm />
            <Posts />
          </header>
        </div>
      </Provider>
    );
  }
}

export default App