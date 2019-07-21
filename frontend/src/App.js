import React, { Component } from 'react';
import './App.css';
import Router from './components/Router/Router';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { renderToStaticMarkup } from 'react-dom/server';
import { withLocalize } from 'react-localize-redux';
import globalTranslations from './translations/global.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.props.initialize({
      languages: [
        { name: 'English', code: 'en' },
        { name: 'French', code: 'fr' }
      ],
      translation: globalTranslations,
      options: { renderToStaticMarkup }
    });
  
    this.state = {};
  }
  
  render() {
    return (
      <div className="App">
        <Navbar />
        <Router />
        <Footer />
      </div>
    );
  }
}

export default withLocalize(App);
