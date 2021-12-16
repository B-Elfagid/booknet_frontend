import React from 'react';
import BooksCard from '../../components/books/BooksCard';

class BookSearch extends React.Component {
  state = {
      searchBooks: []
  }

  
  handleOnChange(event) {
    if (event.target.value !== "") {
      let filteredBooks = this.props.books.books.filter(b => b.title.toLowerCase().includes(event.target.value.toLowerCase()))

      this.setState({
        searchBooks: filteredBooks
      })
    } else {
      this.setState({
        searchBooks: []
      })
    }
  }


  render(){
      return(
      <div>
          <form>
           <div>
            <label>Search Book By Title</label>
            <input type="text" placeholder="Search Book" onChange={e => this.handleOnChange(e)} />
            </div>

          </form>
          <div>
            {this.state.searchBooks.map(book => <BooksCard key={book.id} book={book} />)}
          </div>
     </div>
      )
  }
}


export default BookSearch;