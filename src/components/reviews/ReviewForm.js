import React from 'react';
import { addReview } from '../../actions/reviewsAction.js'
import { connect } from 'react-redux'

class ReviewForm extends React.Component {

    
   state = {
       comment: ""
   }

   handleChange = (e) => {
       this.setState({
       [e.target.name]: e.target.value
       })
   }

   handleSubmit = (e) => {
       e.preventDefault()  
      this.props.dispatchAddReview(e.target.action, this.state)

       this.setState({
       comment: ""
    })
   }

   render(){
       return(
           <div>
               <form onSubmit={this.handleSubmit}>
               <label htmlFor="comment-input">Comment:</label>
                <input onChange={this.handleChange} name="comment" id="comment-input" type="textarea" value={this.state.comment}/><br/>
                <button type="submit">Submit</button>
               </form>
           </div>
       )
   }
}



function mapDispatchToProps(dispatch){
    return {
        dispatchAddReview: (id, review) => dispatch(addReview(id, review))
    }

}

export default connect(null, mapDispatchToProps)(ReviewForm)