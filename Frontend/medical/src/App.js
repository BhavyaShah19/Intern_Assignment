import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Signup from './components/Signup';
import Notestate from './context/notes/Notestate';

function App() {
  return (
    <div className="App" >
      <Notestate>
        <Router>
          <Navbar />
          <Routes>
          <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Router>
      </Notestate>
    </div>
  );
}

export default App;
