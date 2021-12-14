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
           <p>{this.state.likes}</p> 
           <button onClick={this.increaseLikes}>Likes</button>
          </div>
      )

  }

}


