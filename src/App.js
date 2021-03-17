import React from 'react';
import logo from './logo.svg';
import './App.css';
import Pyramid from './components/pyramid/pyramid.component';
import LeftPanel from './components/left-panel/left-panel.component';
import MiddlePanel from './components/middle-panel/middle-panel.component';
import RightPanel from './components/right-panel/right-panel.component';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      steps: '',
      pyramidValues: [[{value:2, clicked: true}],[{value:4, clicked: false},{value:3, clicked: false}],[{value:3, clicked: false},{value:2, clicked: false},{value:6, clicked: false}],[{value:2, clicked: false},{value:9, clicked: false},{value:5, clicked: false},{value:2, clicked: false}],[{value:10, clicked: false},{value:5, clicked: false},{value:2, clicked: false},{value:15, clicked: false},{value:5, clicked: false}]],
      target: 720
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
        <LeftPanel />
        <MiddlePanel>
          <Pyramid pyramidValues={this.state.pyramidValues} handleClickBlock={this.handleClickBlock}/>
        </MiddlePanel>
        <RightPanel target={this.state.target}/>
      </div>
    )
  };
}

export default App;
