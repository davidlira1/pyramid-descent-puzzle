import React from 'react';
import './pyramid-level.styles.scss';
import PyramidBlock from '../pyramid-block/pyramid-block.component';

var PyramidLevel = ({rowValues, handleClickBlock}) => (
    <div className="pyramid-level">
        {rowValues.map(node => (
            <PyramidBlock node={node} handleClickBlock={handleClickBlock}/>
        ))}
    </div>
)

export default PyramidLevel;