import React from 'react';
import Landing from './component/Landing';
import SignUp from './component/SignUp';
import Login from './component/Login';
import Home from './component/Home'
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
