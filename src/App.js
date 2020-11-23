import React from 'react';
import Aside1 from './components/Aside1/Aside1';
import Aside2 from './components/Aside2/Aside2';
import './assets/css/App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import AboutProject from './components/Header/AboutProject/AboutProject';
import Help from './components/Header/Help/Help';
import News from './components/Header/News/News';
import Contacts from './components/Header/Contacts/Contacts';
import Donat from './components/Header/Donat/Donat';
import {BrowserRouter, Route} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className="main_body">
        <Header />
        <Aside1 />
        <Main />
        <Route path = '/aboutproject' component = {AboutProject} />
        <Route path = '/help' component = {Help} />
        <Route path = '/news' component = {News} />
        <Route path = '/contacts' component = {Contacts} />
        <Route path = '/donat' component = {Donat} />
        <Aside2 />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
