
import './App.css';
import BooksList from './components/books/BooksList';
import BookForm from './components/books/BookForm';
import { Route, Routes } from 'react-router'
import Home from './components/Home'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}  />
        <Route path='/books' element={<BooksList />} />
        <Route path='/addbook' element={<BookForm />} />
      </Routes>
    </div>
  );
}

export default App;
