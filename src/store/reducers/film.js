import {
    LOAD_ERROR,
    LOAD_SUCCESS,
    DETAIL_ERROR,
    DETAIL_SUCCESS,
    LOADING,
} from '../../utils/types';

const initialState = {
    movies: [],
    movie: {},
    message: '',
    loading: false,
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
    const { type, payload } = action
    switch (type)
    {
        case LOAD_ERROR:
            return {
                ...state,
                status: false,
            }
        case LOAD_SUCCESS:
            return {
                ...state,
                status: true,
                movies: payload,
            }
        case DETAIL_SUCCESS:
            return {
                ...state,
                status: true,
                movie: payload,
            }
        case DETAIL_ERROR:
            return {
                ...state,
                status: false,
            }
        case LOADING:
            return {
                ...state,
                loading: payload,
            }
        default:
            return state
    }
 }
