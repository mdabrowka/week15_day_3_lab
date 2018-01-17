import React from 'react';

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
              <td>X</td>
              <td>X</td>
              <td>X</td>
            </tr>
            <tr>
              <td>X</td>
              <td>X</td>
              <td>X</td>
            </tr>
            <tr>
              <td>X</td>
              <td>X</td>
              <td>X</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}


export default SquareDisplay;
