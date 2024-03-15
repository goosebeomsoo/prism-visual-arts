import { Route, Routes } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';

import Home from './router/Home';
import Portfolio from './router/Portfolio';
// import Process from './router/Process';

import './_style.scss';

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
