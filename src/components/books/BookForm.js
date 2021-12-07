import React from 'react';
import { NavLink } from 'react-router-dom';

export default class BookForm extends React.Component {
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
                      <input id="title-input" type="text" /><br/>
                     <lable htmlFor="author-input">Author:</lable>
                      <input id="author-input" type="text" /><br/>
                     <lable htmlFor="description-input">Description:</lable>
                      <input id="description-input" type="text" /><br/>
                      <lable htmlFor="image-input">Upload Image:</lable>
                      <input id="image-input" type="file" /> <br/>
                     <button type="submit">Submit</button>
                </form>

                
            </div>
        )
    }

}
