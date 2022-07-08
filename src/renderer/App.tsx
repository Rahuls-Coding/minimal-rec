/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './Homescreen';
import './App.css';

const Hello = () => {
  return(
    <HomeScreen />
  )
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
