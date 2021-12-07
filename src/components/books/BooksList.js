import { Link } from 'react-router-dom';
import React from 'react';
import { setBooks } from '../../actions/booksAction';
import BookForm from '../../components/books/BookForm'
import CategoryList from '../../components/categories/CategoryList'
import { connect } from 'react-redux'


class BookList extends React.Component {
  

  componentDidMount(){
   this.props.dispatchSetBooks()
  }

 render(){
  return(
      <div>
          <CategoryList />
         <BookForm addBook={this.props.addBook}/>
         
          <h1> Book List </h1>
           <Link to='/'> Home </Link> <br/>
           <Link to='/addbook'> Add Book </Link>

            <div >
              <ul className="container">
               {this.props.books.map(b => <li className="card" key={b.id}> <img src={`b.image.url`} /> Title: {b.title} Author: {b.author} Description: {b.description}</li>)}
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