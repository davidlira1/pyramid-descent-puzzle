import React from 'react';
import './pyramid-level.styles.scss';
import PyramidBlock from '../pyramid-block/pyramid-block.component';

var PyramidLevel = ({row, rowValues, handleClickBlock, bottomBorder}) => (
    <div className="pyramid-level">
        {rowValues.map((node, idx) => (
            <PyramidBlock 
                row={row}
                col={idx} 
                node={node} 
                handleClickBlock={handleClickBlock}
                bottomBorder={bottomBorder}
                rightBorder={idx === rowValues.length - 1}
            />
        ))}
    </div>
)

export default PyramidLevel;