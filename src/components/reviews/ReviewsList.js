import React from 'react';
import { connect } from 'react-redux';
import { setReviews } from '../../actions/reviewsAction';
import ReviewForm from '../../components/reviews/ReviewForm';

class ReviewsList extends React.Component {


     componentDidMount(){
        this.props.dispatchSetReviews(parseInt(window.location.href.split('/')[4],10))
       }
    
     render(){
        return(
            <div>
                 <ReviewForm />
                 
                <h1>Comments</h1>
                <ul>
                {this.props.reviews.reviews.map(rev => <li key={rev.id}>{rev.comment}</li>)}
                
                </ul>
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
     dispatchSetReviews: (book_id) => setReviews(book_id)(dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (ReviewsList);