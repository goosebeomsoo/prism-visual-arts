import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './router/Home';
import Portfolio from './router/Portfolio';
// import Process from './router/Process';

import './style.scss';

function App() {
  return (
    // <Route path="/process" element={<Process />} />
    <div className="main">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
