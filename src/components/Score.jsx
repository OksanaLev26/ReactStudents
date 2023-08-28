import React from 'react';
import './score.css';

export default function Score({scores}) {
  return (
    <div className='score'>
        <div className='score-date'>
        <h2>Date</h2>
        {scores.map(score => (
            <h3>{score.date}</h3>
        ))}
        </div>
        <div className='score-score'>
        <h2>Score</h2>
        {scores.map(score => (
            <h3>{score.score}</h3>
        ))}
        </div>
        
    </div>
  )
}
