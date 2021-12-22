
import './App.css';
import BooksList from './components/books/BooksList';
import BookForm from './components/books/BookForm';
import ReviewsList from './components/reviews/ReviewsList'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router'
import Home from './components/Home'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      
      <Navbar />
      <Footer />
      <Routes>
        <Route path='/' element={<Home />}  />
        <Route path='/books' element={<BooksList />} />
        <Route path='/addbook' element={<BookForm />} />
        <Route path='/books/:id/:reviews' element={<ReviewsList />}/>
      </Routes>
      
    </div>
  );
}

export default App;
