import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Authentication from "./pages/authentication"
import Feed from './pages/feed';
import Signup from './pages/signup';
import Profile from './pages/profile';
import './App.css'

function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route path="/" exact element={<Authentication />} />
        <Route path="/feed" exact element={<Feed />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/profile" exact element={<Profile />} />
        </Routes>
    </Router>
  </>
  );
}
export default App;