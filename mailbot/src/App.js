import './App.css';
// routing
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Call from "./pages/Call"
import About from "./pages/About"
import Send from "./pages/Send"
// header
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <div>
        <Header/>
      </div>
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
