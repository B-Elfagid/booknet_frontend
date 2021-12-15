import React from 'react';
import { connect } from 'react-redux'
import { incrementLikes } from '../../actions/likeAction';

class Like extends React.Component {

  handleClick(){
   this.dispatchIncrementLikes(this.state)
  }

  render(){
   
    return(
    <div>  
      <button onClick={this.handleClick}> &hearts;</button>   
        {/* <button onClick={increaseLikes}>&hearts;</button> */}
        {/* <p>{this.state.likes} Likes</p> */}
       <p>{this.likes ? this.likes : 0} {this.likes === 1 ? `Like` : `Likes`}</p>
     </div>
    )
  }
}

 
function mapStateToProps(state){
  return {
     likes: state.likes
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatchIncrementLikes: (book_id) => dispatch(incrementLikes(book_id))
  }
 }

export default connect(mapStateToProps, mapDispatchToProps) (Like);










//  export default class Like extends React.Component {
//   state = {
//       likes: 0
//   }

//   increaseLikes = () => {
//     this.setState({
//         likes: this.state.likes + 1
//     })
    
//   }

//   render(){
//       return(
//           <div>
            
//            <button onClick={this.increaseLikes}>&hearts;</button>
//            {/* <p>{this.state.likes} Likes</p> */}
//            <p>{this.state.likes ? this.state.likes : 0} {this.state.likes === 1 ? `Like` : `Likes`}</p>
//           </div>
//       )

//   }

// }


