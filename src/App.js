import React from 'react';
import logo from './logo.svg';
import './App.css';
import Pyramid from './components/pyramid/pyramid.component'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      steps: '',
      pyramidValues: [[{value:2, clicked: true}],[{value:4, clicked: false},{value:3, clicked: false}],[{value:4, clicked: false},{value:5, clicked: false},{value:6, clicked: false}],[{value:7, clicked: false},{value:8, clicked: false},{value:9, clicked: false},{value:6, clicked: false}],[{value:5, clicked: false},{value:3, clicked: false},{value:8, clicked: false},{value:6, clicked: false},{value:1, clicked: false}]]
    }

    this.handleClickBlock = this.handleClickBlock.bind(this);
  }

  handleClickBlock(rowIdx, colIdx) {
    console.log(rowIdx, colIdx)

    //IF TOP BOX IS CLICKED, RETURN
    if(rowIdx === 0) return;

    //IF BOX THAT IS CLICKED IS NOT IN THE LAST ROW THAT WAS CLICKED, 
    //OR IN THE ROW AFTER IT, RETURN
    if(rowIdx !== this.state.steps.length && rowIdx !== this.state.steps.length + 1) return;

    //IF BOX THAT IS CLICKED IS NOT DIRECTLY
    //TO THE LEFT OR RIGHT OF THE PREVIOUS CLICKED BOX, RETURN
    var prevColIdx = this.state.pyramidValues[rowIdx - 1].reduce((alloc, node, idx) => node.clicked ? idx : alloc, -1);
    console.log('prevColIdx', prevColIdx);
    if(colIdx !== prevColIdx && colIdx !== prevColIdx + 1) return;

    //IF THERE IS ALREADY A CLICKED BOX ON THAT ROW, RETURN
    if(this.state.pyramidValues[rowIdx].reduce((alloc, node, idx) => node.clicked && idx !== colIdx ? true : alloc, false)) return;

    //CREATE A NEW STRING FOR STEPS
    var newSteps = this.state.steps;

    //CREATE A NEW PYRAMIDVALUES 2D ARRAY WITH THE CLICKED VALUE OF THE BOX TOGGLED
    var newPyramidValues = this.state.pyramidValues.map((row, rIdx)  => {
      return row.map((col, cIdx) => {
        var newC = {...col};
        // console.log('rIdx', rIdx, 'cIdx', cIdx, 'row', rowIdx, 'col', colIdx);
        if(rIdx === rowIdx && cIdx === colIdx) {
          newC.clicked = !newC.clicked;
          if(newC.clicked) {
            newSteps+= colIdx === prevColIdx ? "L" : "R";
          } else {
            newSteps = newSteps.substring(0, newSteps.length - 1);
          }
        }
        return newC;
      })
    })
    // console.log('newPyramidValues',newPyramidValues)

    this.setState({
      pyramidValues: newPyramidValues,
      steps: newSteps
    })

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
