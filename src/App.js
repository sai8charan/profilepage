import React from 'react'
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
        </Route>
      </Routes>
      <Sidebar></Sidebar>
    </>
    );
}

export default App;
