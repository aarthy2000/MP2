import Gallery from './views/Gallery'
import './App.css';
import Header from './navigation/Header';
import Filter from './buttons/Filter';
import Detail from './views/Detail';
import Footer from './navigation/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppContextProvider } from './util/AppContextProvider';
import List from './views/List';
import Sort from './buttons/Sort';
import Pagination from './navigation/Pagination';

function App() {
  
  return (
    <AppContextProvider>
      <Router basename="/MP2">
      <div className="app-container">
        <Header />

        <main className="content">
          <div className="sort_filter_container">
            <Sort/>
            <Filter />
          </div>

          <Routes>
            <Route path="/list" element={<List/>} />
            <Route path="/" element={<Gallery/>} />
            <Route path="/artwork/:id" element={<Detail />} />
          </Routes>

          <Pagination/>
        </main>

        <Footer/>
      </div>
    </Router>
    </AppContextProvider>
    
  );
}

export default App;
