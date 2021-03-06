import React from 'react';
import { addBook } from '../../actions/booksAction.js'
import { connect } from 'react-redux'


class BookForm extends React.Component {

  state = {
           title:"",
           author:"",
           description:"",
           image:"",
           category:""       
           
       }

      handleChange = (e) => {
        this.setState({
           [e.target.name] : e.target.value
        })
      }

      handleSubmit = (e) => {
        e.preventDefault()
          this.props.dispatchAddBook(this.state)
            this.setState({
               title:"",
               author:"",
               description:"",
               image:"",
         })
      }

    render(){
        return(
            <div className="book-container" >
               
                <h3> Add Book </h3>
                <form className="book-form" onSubmit={this.handleSubmit}>
                   
                     <label htmlFor="title-input">Title:</label>
                      <input name="title" id="title-input" type="text" value={this.state.title} onChange={this.handleChange} /><br/>
                     <label htmlFor="author-input">Author:</label>
                      <input name="author" id="author-input" type="text" value={this.state.author} onChange={this.handleChange} /><br/>
                     <label htmlFor="description-input">Description:</label>
                      <input name="description" id="description-input" type="textarea" value={this.state.description} onChange={this.handleChange} /><br/>
                      <label htmlFor="image-input">Image-Url:</label>
                      <input name="image" id="image-input" type="text" value={this.state.image} onChange={this.handleChange} /> <br/>
                     <button type="submit">Submit</button>

                </form>

                
            </div>
        )
    }

}

function mapDispatchToProps(dispatch){
    return {
        dispatchAddBook: (book) => dispatch(addBook(book))
    }

}

export default connect(null, mapDispatchToProps)(BookForm)