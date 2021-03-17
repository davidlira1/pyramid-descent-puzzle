import React from 'react';
import './pyramid.styles.scss';
import PyramidBlock from '../pyramid-block/pyramid-block.component';

var PyramidLevel = ({rowValues}) => (
    <div className="pyramid">
        {rowValues.map(value => (
            <PyramidBlock value={value}/>
        ))}
    </div>
)

export default PyramidLevel;