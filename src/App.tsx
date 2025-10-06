import Gallery from './Gallery'
import './App.css';
import Header from './Header';
import Search from './Search';
import Filter from './Filter';
import Detail from './Detail';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppContextProvider } from './AppContextProvider';
import List from './List';
import Sort from './Sort';
import Pagination from './Pagination';

function App() {
  
  return (
    <AppContextProvider>
      <Router basename="/MP2">
      <Header />
      <Search/>
      <Sort/>
      <Filter />
      <Routes>
        <Route path="/list" element={<List/>} />
        <Route path="/" element={<Gallery/>} />
        <Route path="/artwork/:id" element={<Detail />} />
        
      </Routes>
     <Pagination/>
    </Router>
    </AppContextProvider>
    
  );
}

export default App;
