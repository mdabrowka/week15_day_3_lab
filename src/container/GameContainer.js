import React from 'react';
import SquareDisplay from '../components/SquareDisplay.js';

class GameContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      token: "x",
      squares: [" "," "," "," "," "," "," "," "," "]
    }
  this.setPlayer = this.setPlayer.bind(this);
  this.handleSquareClick = this.handleSquareClick.bind(this);
  }



  setPlayer() {
    let nextPlayer;
    if(this.state.token === 'x') {
      nextPlayer = 'o';
    } else {
      nextPlayer = 'x'
    }
    this.setState({
      token: nextPlayer

    })
  }

  handleSquareClick(index) {
    const newSquares = Array.from(this.state.squares);
    newSquares[index] = this.state.token;
    this.setState({ squares: newSquares });
    console.log(this.state.squares[index]);
    this.setPlayer();
  }

  render() {
    return (
      <div>
        <h2>Tic Tac Toe</h2>
        <SquareDisplay className="square-display" squares={this.state.squares} handleSquareClick={this.handleSquareClick}/>

        <button className="button" onClick={this.setPlayer}>X or O?</button>
      </div>
    )
  }

}

export default GameContainer;
