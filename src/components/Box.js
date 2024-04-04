import React from 'react';
import './styles/Box.css'; // path to css file

const Box = ({ tag, title, date, timeToRead }) => (
    <div className="box">
        <p className="tag">{tag}</p>
        <h2 className="title">{title}</h2>
        <p className="date">{date}</p>
        <p className="timeToRead">{timeToRead}</p>
    </div>
);

export default Box;