import React from 'react';
import './right-panel.styles.scss';

var RightPanel = ({target, steps, length, solved, handleSubmit, handleNextPuzzle, wrongAnswer, handleTryAgain}) => (
    <div className="right-panel">
        <div className="product">Product</div>
        <div className="target">{target}</div>
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
                onClick={solved === 'yes' ? handleNextPuzzle : solved === 'tryAgain' ? handleTryAgain : null}
            >
                {solved === 'tryAgain' ? `Try Again` : 'Next Puzzle!'}
            </button>
            : null 
        }
        {
            solved === 'tryAgain' 
            ?
            <p>{`Your product is ${wrongAnswer}`}</p>
            :
            null
        }

    </div>
)

export default RightPanel;