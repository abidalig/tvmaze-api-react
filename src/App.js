
import './App.css';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Summary from './components/Summary';
import NavBar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/tvmaze-api-react" element={ < Home />}/>
        <Route path="/sum" element={ < Summary />}/>
    </Routes>
    </div>
  );
}

export default App;
