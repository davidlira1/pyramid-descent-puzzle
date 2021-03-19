import React from 'react';
import './left-panel.styles.scss';

var LeftPanel = () => (
    <div className="left-panel">
        <h1>Pyramid Descent Puzzle</h1>
        <p>To solve the puzzle, you must find a path that traverses the pyramid from top to bottom visiting numbers whose overall product is the given target value.</p>
        <p>Each step in the path must go down one row, and go either one step to the left or one step to the right.</p>
        <p>The top box begins your path. Click on a box on the next row to continue, and repeat until you reach the bottom.</p>
    </div>
)

export default LeftPanel;