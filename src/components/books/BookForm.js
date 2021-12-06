import React from 'react';
import { Link } from 'react-router-dom';

export default class BookForm extends React.Component {
    render(){
        return(
            <div>
                <form>
                     <lable htmlFor="image-input">Image</lable>
                      <input id="image-input" type="text" />
                     <lable htmlFor="title-input">Title</lable>
                      <input id="title-input" type="text" />
                     <lable htmlFor="author-input">Author</lable>
                      <input id="author-input" type="text" />
                     <lable htmlFor="description-input">Description</lable>
                      <input id="description-input" type="text" />
                     <button type="submit">Submit</button>
                </form>

                <div>
                 <Link to='/'> Home </Link>
                </div>
            </div>
        )
    }

}
