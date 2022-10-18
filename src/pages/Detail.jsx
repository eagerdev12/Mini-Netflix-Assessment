/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { DETAIL_ERROR, DETAIL_SUCCESS } from '../utils/types';
import api from '../services/movie';
import './Detail.scss';

const Detail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const movie = useSelector((state) => state.film.movie);

    useEffect(() => {
        getMovieDetail();
    }, []);

    const getMovieDetail = async () => {
        try {
            const response = await api.getMovieDetail(id);
            dispatch({
                type: DETAIL_SUCCESS,
                payload: response
            });
        } catch (err) {
            dispatch({
                type: DETAIL_ERROR,
                payload: []
            });
        }
    }
    
    return (
        <div className='container detail-page'>
            <img className='movie-logo' src={movie.Poster} alt={movie.imdbID} loading="lazy" />
            <div className='w-100 p-l-10'>
                <h3 className='font-weight-700'>{movie.Title}</h3>
                <p className='font-weight-700'>{movie.Runtime} | {movie.Genre} | {movie.Released} | {movie.Country}</p>
                <p className='font-weight-700'>{movie.Language} | {movie.Rated} | {movie.imdbRating}</p>
                <p>Starring: <span className='font-weight-700'>{movie.Actors}</span></p>
                <p>Director: {movie.Director}</p>
                <p>Writer: {movie.Writer}</p>
                <p>Plot: <span className='font-weight-700'>{movie.Plot}</span></p>
            </div>
        </div>
    )
}

export default Detail;