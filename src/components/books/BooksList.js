import { Link } from 'react-router-dom';
import React from 'react';
import { setBooks } from '../../actions/booksAction';
import BooksCard from '../../components/books/BooksCard';
import CategoryFilter from '../categories/CategoryFilter';
import { connect } from 'react-redux'


class BookList extends React.Component {
  

  componentDidMount(){
   this.props.dispatchSetBooks()
  }

 render(){
  return(
      <div>
         <CategoryFilter />
         
         
          <h1> Book List </h1>
           <Link to='/'> Home </Link> <br/>
           <Link to='/addbook'> Add Book </Link>

            <div >
              <ul className="container">
               {this.props.books.map(book => <BooksCard key={book.id} book={book} />)}
             </ul>
            
          </div>
  
     </div>
  )
  }
}

function mapStateToProps(state) {
  return {
     books: state.books
  }
}


function mapDispatchToProps(dispatch) {
 return {
   dispatchSetBooks: () => dispatch(setBooks())
 }
}



export default connect(mapStateToProps, mapDispatchToProps)(BookList)