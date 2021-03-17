import React from 'react';
import './pyramid-level.styles.scss';
import PyramidBlock from '../pyramid-block/pyramid-block.component';

var PyramidLevel = ({rowValues}) => (
    <div className="pyramid-level">
        {rowValues.map(value => (
            <PyramidBlock value={value}/>
        ))}
    </div>
)

export default PyramidLevel;