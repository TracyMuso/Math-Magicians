import './App.css';
import { Routes, Route } from 'react-router-dom';
import Calculator from './components/calculator';
import Quote from './components/Quote';
import Nav from './components/Nav';
import Home from './components/Home';

const App = () => (
  <>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/quote" element={<Quote />} />
      <Route path="*" element={<h1>Note Found</h1>} />
    </Routes>
  </>
);

export default App;
