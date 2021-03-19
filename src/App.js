import React from 'react';
import './App.css';
import Pyramid from './components/pyramid/pyramid.component';
import LeftPanel from './components/left-panel/left-panel.component';
import MiddlePanel from './components/middle-panel/middle-panel.component';
import RightPanel from './components/right-panel/right-panel.component';
import GoodJob from './components/good-job/good-job.component';
import levels from './levels/levels.js';
import pyramidDescentSolver from './solver/pyramidDescentSolver';
import productForStepsTaken from './solver/productForStepsTaken';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      steps: '',
      pyramidValues: [[]],
      target: 0,
      level: 0,
      solved: false,
      solvedAll: false,
      wrongAnswer: 0
    }
    this.handleClickBlock = this.handleClickBlock.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNextPuzzle = this.handleNextPuzzle.bind(this);
    this.handleTryAgain = this.handleTryAgain.bind(this);
  }

  componentDidMount() {
    this.nextLevel();
  }

  nextLevel() {
    if(this.state.level === levels.length) {
      this.setState({solvedAll: true})
      return;
    } 
    var level = this.state.level + 1;
    var pyramidValues = levels[level - 1].values.map(row => row.map(col => {return {value: col, clicked: false}}));
    pyramidValues[0][0].clicked = true;
    var target = levels[level - 1].target;
    var solved = 'no';
    var steps = '';
    this.setState({pyramidValues,target, level, solved, steps});
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

    this.setState({
      pyramidValues: newPyramidValues,
      steps: newSteps,
      solved: 'no'
    })

  }

  handleSubmit = () => {
    console.log('came in to check answer');
    var pyramidValues = levels[this.state.level - 1].values;
    var result = pyramidDescentSolver(this.state.target, pyramidValues);
    if(result === this.state.steps) {
      this.setState({solved: 'yes'});
    } else {
      //DETERMINE WHAT THE PRODUCT IS FOR THE STEPS TAKEN
      var wrongAnswer = productForStepsTaken(this.state.steps, levels[this.state.level - 1].values);
      this.setState({solved: 'tryAgain', wrongAnswer});
    }
  }

  handleNextPuzzle = () => {
    this.nextLevel();
  }

  handleTryAgain = () => {
    var newPyramidValues = this.state.pyramidValues.map(row => {
      return row.map(col => {
        var newC = {...col};
        newC.clicked = false;
        return newC
      })
    });
    newPyramidValues[0][0].clicked = true;
    this.setState({
      pyramidValues: newPyramidValues, 
      steps: '', 
      solved: 'no'
    });
  }

  render() {
    return (
      this.state.solvedAll 
      ? 
      <div className="App">
        <GoodJob />
      </div>
      :
      <div className="App"> 
        <LeftPanel />
        <MiddlePanel>
          <Pyramid 
            pyramidValues={this.state.pyramidValues} 
            handleClickBlock={this.handleClickBlock}/>
        </MiddlePanel>
        <RightPanel 
          target={this.state.target} 
          steps={this.state.steps} 
          length={this.state.pyramidValues.length}
          solved={this.state.solved}
          handleSubmit={this.handleSubmit}
          handleNextPuzzle={this.handleNextPuzzle}
          handleTryAgain={this.handleTryAgain}
          wrongAnswer={this.state.wrongAnswer}
        />
      </div>
    )
  };
}

export default App;
