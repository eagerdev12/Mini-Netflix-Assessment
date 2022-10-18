/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

export default {
    getMovieList: async () => {
        try {
          const response = await axios.get(`http://www.omdbapi.com/?apikey=62b54deb&s=Batman&page=1`);
          return Promise.resolve(response?.data?.Search);
        } catch (e) {
          console.error(e);
          return Promise.reject(e);
        }
    },

    getMovieDetail: async (imdbID) => {
      try {
        const response = await axios.get(`http://www.omdbapi.com/?apikey=62b54deb&i=${imdbID}&plot=full`);
        return Promise.resolve(response?.data);
      } catch (e) {
        console.error(e);
        return Promise.reject(e);
      }
  }
}