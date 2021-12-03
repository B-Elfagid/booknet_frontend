
import './App.css';
import BooksList from './components/books/BooksList';
import { Route, Routes } from 'react-router'
import Home from './components/Home'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}  />
        <Route path='/books' element={<BooksList />} />
      </Routes>
    </div>
  );
}

export default App;
