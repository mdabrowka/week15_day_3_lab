import React from 'react';

class Square extends React.Component {
  constructor(props) {
    super(props)
    this.squareClicked = this.squareClicked.bind(this);
  }

  squareClicked() {
    console.log('Square got clicked', this.props.index);
    this.props.handleSquareClick(this.props.index);
  }

    render() {
      return(
        <td>
          <button onClick={this.squareClicked}>Click me!</button>
          { this.props.token }
        </td>
      )
    }
}

export default Square;
