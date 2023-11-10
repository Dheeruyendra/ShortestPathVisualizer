import React from 'react';
import './Node.css';

const Node = ({col, row, isStart, isFinish, isWall, onMouseDown, onMouseEnter, onMouseUp}) => {
    const extraClassName = isFinish ? 'node-finish' : isStart ? 'node-start' : isWall ? 'node-wall' : '';

    return (
    <div
        id = {`node-${row}-${col}`}
        className = {`node ${extraClassName}`}
        onMouseDown={() => onMouseDown(col, row)}
        onMouseEnter = {() => onMouseEnter(col, row)}
        onMouseUp = {() => onMouseUp()}
    ></div>
    );

};

export default Node;  