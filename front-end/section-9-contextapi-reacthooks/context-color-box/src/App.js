// ./App.js
import './App.css';
import React from 'react';
import ColorBox from './components/ColorBox';
import myContext from './components/myContext';

class App extends React.Component {
  state = {
    currentBackgroundColor: 'blue',
  }

  handleChangeColor = (currentColour) => {
    if (currentColour === 'blue') {
      this.setState({
        currentBackgroundColor: 'red'
      })
    } else if (currentColour === 'red') {
      this.setState({
        currentBackgroundColor: 'yellow'
      })
    } else if (currentColour === 'yellow') {
      this.setState({
        currentBackgroundColor: 'blue'
      })
    }
  }

  render() {
    const contextValue = {
      backgroundColor: this.state.currentBackgroundColor,
      changeColor: this.handleChangeColor,
    }
    return (
      <myContext.Provider value={ contextValue }>
        <ColorBox />
      </myContext.Provider>
    );
  }
}
export default App;