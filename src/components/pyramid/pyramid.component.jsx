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
                bottomBorder={idx === pyramidValues.length - 1}
            />
        )}
    </div>
)

export default Pyramid;