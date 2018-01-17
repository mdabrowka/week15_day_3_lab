import React from 'react';
import Square from './Square.js';

class SquareDisplay extends React.Component {

  render() {
    return (
      <div className="center">
        <table>
          <tbody>
            <tr>
              <th></th>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <Square index={0} handleSquareClick={this.props.handleSquareClick} token={this.props.squares[0]}/>
              <Square index={1} handleSquareClick={this.props.handleSquareClick} token={this.props.squares[1]}/>
              <Square index={2} handleSquareClick={this.props.handleSquareClick} token={this.props.squares[2]}/>
            </tr>
            <tr>
              <Square/>
              <Square/>
            <Square/>
            </tr>
            <tr>
              <Square/>
              <Square/>
              <Square/>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}


export default SquareDisplay;
