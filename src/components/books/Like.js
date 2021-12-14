import React from 'react';


 export default class Like extends React.Component {
  state = {
      likes: 0
  }

  increaseLikes = () => {
    this.setState({
        likes: this.state.likes + 1
    })
    
  }

  render(){
      return(
          <div>
            
           <button onClick={this.increaseLikes}>&hearts;</button>
           {/* <p>{this.state.likes} Likes</p> */}
           <p>{this.state.likes ? this.state.likes : 0} {this.state.likes === 1 ? `Like` : `Likes`}</p>
          </div>
      )

  }

}


