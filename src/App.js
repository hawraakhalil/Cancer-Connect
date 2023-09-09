import React, { useState } from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Authentication from "./pages/authentication"
import UsernameContext from './usernameContext';
import Feed from './pages/feed';
import Signup from './pages/signup';
import Profile from './pages/profile';
import './App.css'

function App() {
  const [username, setUsername] = useState('');
  return (
    <>
    <UsernameContext.Provider value={{ username, setUsername }}>
    <Router>
      <Routes>
      <Route path="/" exact element={<Authentication />} />
        <Route path="/feed" exact element={<Feed />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/profile" exact element={<Profile />} />
        </Routes>
    </Router>
    </UsernameContext.Provider>
  </>
  );
}
export default App;