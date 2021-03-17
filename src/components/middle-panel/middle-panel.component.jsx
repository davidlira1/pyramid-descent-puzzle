import React from 'react';
import './middle-panel.styles.scss';


var MiddlePanel = (props) => (
    <div className="middle-panel">
        {props.children}
    </div>
)

export default MiddlePanel;