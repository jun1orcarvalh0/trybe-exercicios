// ./components/ColorBox.jsx
import React from 'react';
import '../styles/box.css';
import myContext from './myContext';

class ColorBox extends React.Component {
  render() {
    return(
      <div>
        <myContext.Consumer>
          {
            value => (
            <button
              type="button"
              className="box"
              style={ { backgroundColor: value.backgroundColor } }
              onClick={() => value.changeColor(value.backgroundColor)}
            >
              Click me to change my color!
            </button>
            )
          }
        </myContext.Consumer>
      </div>
    )
  }
}
export default ColorBox;