import React from 'react';
import Aside1 from './components/Aside1/Aside1';
import Aside2 from './components/Aside2/Aside2';
import './assets/css/App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

const App = () => {
  return (
    <div className="main_body">
      <Header />
      <Aside1 />
      <Main />      
      <Aside2 />
      <Footer />
    </div>
  );
}

export default App;
