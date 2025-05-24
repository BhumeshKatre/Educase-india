import React from 'react';
import Landing from './component/Landing';
import SignUp from './component/SignUp';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      {/* <Route path="/login" element={<Login />} /> */}
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
