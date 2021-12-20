import React from 'react';
import { connect } from 'react-redux';
import { setReviews } from '../../actions/reviewsAction';
import ReviewForm from '../../components/reviews/ReviewForm';

class ReviewsList extends React.Component {


     componentDidMount(){
        this.props.dispatchSetReviews(parseInt(window.location.href.split('/')[4],10))
       }
    
     render(){
         console.log(this.props)
         
        return( 
             <div className="comment-container">
               <ul className="commet-list"> 
               
                {this.props.reviews.reviews.map(rev => <li key={rev.id}>★{rev.comment}</li>)}
                
                </ul>
                  <ReviewForm />
                <div>
                   
                </div>
            </div>

        )
    }

}

function mapStateToProps(state){
  return {
      reviews: state.reviews
  }
}

function mapDispatchToProps(dispatch){
    return {
    //  dispatchSetReviews: (book_id) => setReviews(book_id)(dispatch)
    dispatchSetReviews: (book_id) => dispatch(setReviews(book_id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (ReviewsList);