import React, { useState } from 'react';
import {BrowserRouter as Router, Routes, Route,Navigate, Link} from "react-router-dom";
import Authentication from "./pages/authentication"
import Feed from './pages/feed';
import Signup from './pages/signup';
import Profile from './pages/profile'
import Post from './pages/post';
import Password from './pages/password';
import Avatar from './pages/avatar';
import Home from './pages/home';


import './App.css'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/feed" exact element={<Feed />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/profile" exact element={<Profile />} />
        <Route path="/post" exact element={<Post />} />
        <Route path="/avatar" exact element={<Avatar />} />
        <Route path="/password" exact element={<Password />} />
        <Route path="/authentication" exact element={<Authentication />} />
        <Route path="*" exact element={<Navigate to="/" />} />
        </Routes>
    </Router>
  </>
  );
}
export default App;