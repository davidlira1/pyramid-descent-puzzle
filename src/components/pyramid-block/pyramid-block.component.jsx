import React from 'react';
import './pyramid-block.styles.scss';

var PyramidBlock = ({row, col, node, handleClickBlock}) => (
    <div 
        className={`pyramid-block ${node.clicked ? 'clicked' : ''}`} 
        onClick={(ev) => handleClickBlock(row, col)}
    >
        {node.value}
    </div>
)

export default PyramidBlock;