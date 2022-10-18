/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_SUCCESS, LOAD_ERROR } from '../utils/types';
import api from '../services/movie';
import { Card } from '../components';

const Main = () => {
    const dispatch = useDispatch();
    const movies = useSelector((state) => state.film.movies) || [];

    useEffect(() => {
        if (movies.length === 0) {
            getMovieList();
        }
    }, []);

    const getMovieList = async () => {
        try {
            const response = await api.getMovieList();
            dispatch({
                type: LOAD_SUCCESS,
                payload: response,
            });
        } catch (err) {
            dispatch({
                type: LOAD_ERROR,
                payload: [],
            });
        }
    }

    return (
        <div className='grid-container'>
            {
                movies && movies.length > 0 && movies.map((movie, index) => (
                    <Card key={index} movie={movie}/>
                ))
            }
        </div>
    )
}

export default Main;