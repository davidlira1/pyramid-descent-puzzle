import React from 'react';
import './pyramid-block.styles.scss';

var PyramidBlock = ({row, col, node, handleClickBlock, bottomBorder, rightBorder}) => (
    <div 
        className={`pyramid-block ${node.clicked ? 'clicked' : ''} ${bottomBorder ? 'bottom-border' : null} ${rightBorder ? 'right-border': null}`} 
        onClick={(ev) => handleClickBlock(row, col)}
    >
        {node.value}
    </div>
)

export default PyramidBlock;