import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { useAppDispatch } from './store/hooks';
import { getRandomStrings } from './utils/data';
import { setRandomStrings } from './store/slices/stringSlice';

function App() {
  const dispatch = useAppDispatch();
  const randomStrings = getRandomStrings(3);
  dispatch(setRandomStrings(randomStrings));

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
