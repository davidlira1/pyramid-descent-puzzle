import React from 'react';
import './right-panel.styles.scss';

var RightPanel = ({target}) => (
    <div className="right-panel">
        <div>Target</div>
        <div>{target}</div>
        <button>Submit</button>
    </div>
)

export default RightPanel;