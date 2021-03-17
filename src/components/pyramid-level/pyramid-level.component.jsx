import React from 'react';
import './pyramid-level.styles.scss';
import PyramidBlock from '../pyramid-block/pyramid-block.component';

var PyramidLevel = ({row, rowValues, handleClickBlock}) => (
    <div className="pyramid-level">
        {rowValues.map((node, idx) => (
            <PyramidBlock 
                row={row}
                col={idx} 
                node={node} 
                handleClickBlock={handleClickBlock}
            />
        ))}
    </div>
)

export default PyramidLevel;