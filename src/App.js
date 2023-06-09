import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import { Options } from './components/op_buttons/Options';
import Header from './components/header/Header'
import Footer from './components/footer/Footer';
import Card from './components/cards/Cards';
import Add from './components/add/Add';
import './App.css';



function App() {
  const [currentRoute, setCurrentRoute] = useState('');

  const handleRouteChange = (location) => {
    setCurrentRoute(location.pathname);
  };

  useEffect(() => {
    handleRouteChange(window.location);
  }, []);

  return (
    <>
    <Header screen="Products List" />
    <section className='main'>
      <Options route={currentRoute} />
      <Router>
        <Routes>
            <Route path="/" element={<Card />}/>
            <Route path="/add" element={<Add />}/>
        </Routes>
      </Router>
    </section>
    <Footer />
    </>
  );
}

export default App;
