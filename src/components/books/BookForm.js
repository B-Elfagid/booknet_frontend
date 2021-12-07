import React from 'react';
import { NavLink } from 'react-router-dom';

export default class BookForm extends React.Component {

  state = {
           title:"",
           author:"",
           description:"",
           image:""
       }

       handleChange = (e) => {
        this.setState({
           [e.target.name] : e.target.value
        })
      }

    render(){
        return(
            <div className="book-container" >
                 <div>
                   <NavLink to='/'> Home </NavLink>
                </div>
                <br/>
                <h3> Add Book </h3>
                <form className="book-form">
                   
                     <lable htmlFor="title-input">Title:</lable>
                      <input name="title" id="title-input" type="text" value={this.state.title} onChange={this.handleChange} /><br/>
                     <lable htmlFor="author-input">Author:</lable>
                      <input name="author" id="author-input" type="text" value={this.state.author} onChange={this.handleChange} /><br/>
                     <lable htmlFor="description-input">Description:</lable>
                      <input name="description" id="description-input" type="textarea" value={this.state.description} onChange={this.handleChange} /><br/>
                      <lable htmlFor="image-input">Upload Image:</lable>
                      <input name="image" id="image-input" type="file" onChange={this.handleChang} /> <br/>
                     <button type="submit">Submit</button>
                     {this.state.title}
                </form>

                
            </div>
        )
    }

}
