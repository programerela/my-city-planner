import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage.js"

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/"         element={<HomePage />} />
        {/* <Route path="/o-gradu"  element={<AboutPage />} /> */}
        {/* <Route path="/kontakt"  element={<ContactPage />} /> */}
      </Routes>

    </div>
  );
}

export default App;
