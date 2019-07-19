import React from 'react';
import './App.css';
import Router from './components/Router/Router';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router />
      <Footer />
    </div>
  );
}

export default App;