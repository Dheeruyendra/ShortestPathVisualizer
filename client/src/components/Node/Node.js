import React from 'react';
import './Node.css';

const Node = ({ col, row, isStart, isFinish, isWall, onMouseDown, onMouseEnter, onMouseUp }) => {
    const extraClassName = isFinish ? 'node-finish' : isStart ? 'node-start' : isWall ? 'node-wall' : '';

    // Updated to pass node type information in mouse event handlers
    return (
        <div
            id={`node-${row}-${col}`}
            className={`node ${extraClassName}`}
            onMouseDown={() => onMouseDown(row, col, isStart, isFinish)}
            onMouseEnter={() => onMouseEnter(row, col, isStart, isFinish)}
            onMouseUp={() => onMouseUp()}
        ></div>
    );
};

export default Node;
