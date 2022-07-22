import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.firstClick = this.firstClick.bind(this)
    this.secondClick = this.secondClick.bind(this)
    this.thirdClick = this.thirdClick.bind(this)

    this.state = {
      clicksBtnOne: 0,
      clicksBtnTwo: 0,
      clicksBtnThree: 0.
    }
  }

  firstClick() {
    this.setState((previousState, _props) => ({
      clicksBtnOne: previousState.clicksBtnOne + 1
    }))
    console.log(`Botão 1 ${this.getButtonColor(this.state.clicksBtnOne)}`)
  }

  secondClick() {
    this.setState((previousState, _props) => ({
      clicksBtnTwo: previousState.clicksBtnTwo + 1
    }))
    console.log(`Botão 2 ${this.getButtonColor(this.state.clicksBtnTwo)}`)
  }

  thirdClick() {
    this.setState((previousState, _props) => ({
      clicksBtnThree: previousState.clicksBtnThree + 1
    }))
    console.log(`Botão 3 ${this.getButtonColor(this.state.clicksBtnThree)}`)
  }

  getButtonColor(num) {
    return num % 2 === 0 ? 'green' : 'white';
  }

  render() {
    const { clicksBtnOne, clicksBtnTwo, clicksBtnThree } = this.state;
    return (
      <div>
        <button onClick={this.firstClick}
        style={{ backgroundColor: this.getButtonColor(clicksBtnOne)}}
        >Botão 1 | Count = {clicksBtnOne}</button>
        <button onClick={this.secondClick}
        style={{ backgroundColor: this.getButtonColor(clicksBtnTwo) }}
        >Botão 2 | Count = {clicksBtnTwo}</button>
        <button onClick={this.thirdClick}
        style={{ backgroundColor: this.getButtonColor(clicksBtnThree) }}
        >Botão 3 | Count = {clicksBtnThree}</button>     
      </div>
    )
  }
}

export default App;
