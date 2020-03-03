import React from 'react';
import './App.css';
/* Containers */
import Landing from './containers/Landing';
import Showcase from './containers/Showcase';
import Mission from './containers/Mission';
/* Components */
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Landing />
      <Showcase />
      <Mission />
      <Footer />
    </div>
  );
}

export default App;
