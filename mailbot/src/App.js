import logo from './logo.svg';
import './App.css';
// routing
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Call from "./pages/Call"
import About from "./pages/About"
import Send from "./pages/Send"


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="call" element={ <Call/> } />
        <Route path="about" element={ <About/> } />
        <Route path="send" element={ <Send/> } />
      </Routes>
    </div>
  );
}

export default App;
