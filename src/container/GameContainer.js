import React from 'react';
import SquareDisplay from '../components/SquareDisplay.js';

class GameContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      squares: []
    }
  }


  render() {
    return (
      <div>
        <SquareDisplay className="square-display"/>
      </div>
    )
  }

}

export default GameContainer;
