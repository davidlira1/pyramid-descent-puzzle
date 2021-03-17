import React from 'react';
import './pyramid-block.styles.scss';

var PyramidBlock = ({node, handleClickBlock}) => (
    <div className={`pyramid-block ${node.clicked ? 'clicked' : ''}`} onClick={handleClickBlock}>
        {node.value}
    </div>
)

export default PyramidBlock;