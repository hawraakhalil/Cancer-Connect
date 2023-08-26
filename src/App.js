import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Authentication from "./pages/authentication"
import Feed from './pages/feed';
import './App.css'

function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route path="/" exact element={<Authentication />} />
        <Route path="/feed" exact element={<Feed />} />
        </Routes>
    </Router>
  </>
  );
}
export default App;