import Gallery from './Gallery'
import './App.css';
import Header from './Header';
import Search from './Search';
import Filter from './Filter';
import Detail from './Detail';
import Pagination from './Pagination';
import { call_artworks_get, call_artworks_search } from './util/api_caller';
import { useEffect, useState } from 'react';
import { Artwork } from './model';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppContextProvider } from './AppContextProvider';

function App() {
  
  return (
    <AppContextProvider>
      <Router>
      <Header />
      <Search/>
      <Filter />
      <Routes>
        <Route path="/" element={<Gallery/>} />
        <Route path="/artwork/:id" element={<Detail />} />
        
      </Routes>
     <Pagination/>
    </Router>
    </AppContextProvider>
    
  );
}

export default App;
