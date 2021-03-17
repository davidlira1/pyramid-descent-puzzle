import React from 'react';
import './pyramid.styles.scss';
import PyramidLevel from '../pyramid-level/pyramid-level.component'

var Pyramid = ({pyramidValues, handleClickBlock}) => (
    <div className="pyramid">
        {pyramidValues.map((row, idx) => 
            <PyramidLevel 
                row={idx}
                rowValues={row} 
                handleClickBlock={handleClickBlock}
            />
        )}
    </div>
)

export default Pyramid;