import React from 'react';
import logo from './logo.svg';
import './App.css';
import Pyramid from './components/pyramid/pyramid.component'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      steps: '',
      pyramidValues: [[{value:2, clicked: false}],[{value:4, clicked: false},{value:3, clicked: false}],[{value:4, clicked: false},{value:5, clicked: false},{value:6, clicked: false}],[{value:7, clicked: false},{value:8, clicked: false},{value:9, clicked: false},{value:6, clicked: false}],[{value:5, clicked: false},{value:3, clicked: false},{value:8, clicked: false},{value:6, clicked: false},{value:1, clicked: false}]]
    }

    this.handleClickBlock = this.handleClickBlock.bind(this);
  }

  handleClickBlock() {
    console.log('hello')
  }

  render() {
    return (
      <div className="App">
        <Pyramid pyramidValues={this.state.pyramidValues} handleClickBlock={this.handleClickBlock}/>
      </div>
    )
  };
}

export default App;
