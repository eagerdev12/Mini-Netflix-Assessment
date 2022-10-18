import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Card.scss';

const Card = ({ movie }) => {
    const navigate  = useNavigate();

    const handleClick = () => {
        navigate ('/movie/' + movie.imdbID);
    }

    return (
        <div className='card-container' onClick={handleClick}>
            <div className='card'>
                <h3><span className='text-capitalize'>{movie.Type}</span> - {movie.Title} ({movie.Year})</h3>
                <img src={movie.Poster} alt={movie.Title} loading="lazy"/>
            </div>
        </div>
    )
}

export default Card;