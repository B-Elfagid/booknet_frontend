import React from 'react';

import { Link } from 'react-router-dom';
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
            category:""
        })
      }

    render(){
        return(
            <div className="book-container" >
                 <Link to='/'> Home </Link> <br/>
                 <Link to='/books'> Books List </Link> <br/>
               
                <h3> Add Book </h3>
                <form className="book-form" onSubmit={this.handleSubmit}>
                   
                     <lable htmlFor="title-input">Title:</lable>
                      <input name="title" id="title-input" type="text" value={this.state.title} onChange={this.handleChange} /><br/>
                     <lable htmlFor="author-input">Author:</lable>
                      <input name="author" id="author-input" type="text" value={this.state.author} onChange={this.handleChange} /><br/>
                     <lable htmlFor="description-input">Description:</lable>
                      <input name="description" id="description-input" type="textarea" value={this.state.description} onChange={this.handleChange} /><br/>
                      <lable htmlFor="category-input">Category:</lable>
                      <input name="category" id="category-input" type="text" value={this.state.category} onChange={this.handleChange} /> <br/>
                      <lable htmlFor="image-input">Upload Image:</lable>
                      <input name="image" id="image-input" type="file" value={this.state.image} onChange={this.handleChange} /> <br/>


                      

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