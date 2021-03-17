import React from 'react';
import './pyramid.styles.scss';
import PyramidLevel from '../pyramid-level/pyramid-level.component'

var Pyramid = ({pyramidValues}) => (
    <div className="pyramid">
        {pyramidValues.map(row => <PyramidLevel rowValues={row}/>)}
    </div>
)

export default Pyramid;