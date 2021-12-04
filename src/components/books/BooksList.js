import { Link } from 'react-router-dom';
import React from 'react';
import { setBooks } from '../../actions/booksAction';
import { connect } from 'react-redux'


class BookList extends React.Component {

  componentDidMount(){
    fetch('http://localhost:8080/books')
    .then(r => r.json())
    .then(books => this.props.dispatchSetBooks(books))
  }

 render(){
  return(
      <div>
          <h1> Book List </h1>
           <Link to='/'> Home </Link> <br/>
           <Link to='/addbook'> Add Book </Link>

          <div>
            {this.props.books.map(b => <p key={b.id}>title: {b.title} author: {b.author} description: {b.description}</p>)}
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
   dispatchSetBooks: (books) => dispatch(setBooks(books))
 }
}



export default connect(mapStateToProps, mapDispatchToProps)(BookList)