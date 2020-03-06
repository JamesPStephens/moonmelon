import React from 'react';
import './App.css';
/* Containers */
import Landing from './containers/Landing';
import Showcase from './containers/Showcase';
import Mission from './containers/Mission';
/* Components */
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
/* Assets */
import './assets/fonts/Arial-Rounded-MT-Bold.ttf';
import './assets/fonts/Arial-Rounded-MT-Thin.ttf';
import Contact from './containers/Contact';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Landing />
      {/* <Showcase /> */}
      <Mission />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
