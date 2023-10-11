import './App.css';
import Home from './pages/Home';
import { useAppDispatch } from './store/hooks';
import { getRandomStrings } from './utils/data';
import { setRandomStrings } from './store/slices/stringSlice';

function App() {
  const dispatch = useAppDispatch();
  const randomStrings = getRandomStrings(10);
  dispatch(setRandomStrings(randomStrings));

  return (
    <div className="App h-screen">
      <Home />
    </div>
  );
}

export default App;
