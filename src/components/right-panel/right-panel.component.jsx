import React from 'react';
import './right-panel.styles.scss';

var RightPanel = ({target, steps, length, solved, handleSubmit, handleNextPuzzle}) => (
    <div className="right-panel">
        <div>Product</div>
        <div>{target}</div>
        {steps.length === length - 1 
            ? 
            <button 
                onClick={handleSubmit}
            >
                Submit
            </button> 
            : null
        }
        {
            solved === 'tryAgain' || solved === 'yes' 
            ? 
            <button
                className={solved === 'tryAgain' ? 'no-color' : ''}
                onClick={solved === 'yes' ? handleNextPuzzle : null}
            >
                {solved === 'tryAgain' ? 'Try Again' : 'Next Puzzle!'}
            </button>
            : null 
        }

    </div>
)

export default RightPanel;