import logo from './logo.svg';
import './App.css';
import Layout from './components/layout/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Movie from './components/Movie';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path='/movie' element={<Movie/> } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
