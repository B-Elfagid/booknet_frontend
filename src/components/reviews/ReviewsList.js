import React from 'react';
import { connect } from 'react-redux';
import { setReviews } from '../../actions/reviewsAction';

class ReviewsList extends React.Component {


     componentDidMount(){
        this.props.dispatchSetReviews()
       }

     render(){
        return(
            <div>
                <h1>Comments</h1>
                <ul>
                {/* {this.props.reviews.map(rev => <li>{rev.comment}</li>)} */}
                </ul>
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
     dispatchSetReviews: () => dispatch(setReviews())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (ReviewsList);