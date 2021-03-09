import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from '../router/'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: [],
    movie: {}
  },
  mutations: {
    FETCH_MOVIES (state, payload) {
      state.movies = payload
    },
    FETCH_MOVIE (state, payload) {
      router.push({ path: `/movie/${payload.id}` })
      state.movie = payload
    }
  },
  actions: {
    fetchMovies ({ commit }) {
      Axios
        .get('http://localhost:3000/movie/', {
          headers: {
            name: localStorage.getItem('name')
          }
        })
        .then(({ data }) => {
          commit('FETCH_MOVIES', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchMovieById (context, payload) {
      Axios
        .get(`http://localhost:3000/movie/${payload}`, {
          headers: {
            name: localStorage.getItem('name')
          }
        })
        .then(({ data }) => {
          context.commit('FETCH_MOVIE', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    register (context, payload) {
      return Axios
        .post('http://localhost:3000/register', {
          name: payload
        })
        .then(({ data }) => {
          localStorage.setItem('name', data.name)
        })
    },
    buyTickets (context, payload) {
      Axios
        .patch(`/movie/${payload.movieId}/book`, {
          tickets: payload.tickets
        }, {
          headers: {
            name: localStorage.getItem('name')
          }
        })
        .then(({ data }) => {
          router.push({ path: '/movie' })
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
