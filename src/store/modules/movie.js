/**
 * Created by limuzi on 2017/4/28.
 */
import * as type from '../douban-type'
import * as api from '../api'

const state = {
  movie: ''
}
const mutations = {
  [type.MOVIE_HOT](state, payload){
    state.movies[payload.type].subjects =
      state.movies[payload.type].subjects.concat(payload.subjects)
    // state.movies[payload.type].total = state.movies[payload.type].subjects.length;
  }
}
const actions = {
  [type.MOVIE_HOT](state, payload){
    api.getHotMovies(payload.type, {count: payload.count})
      .then(data => context.commit(type.MOVIE_HOT, {
        type: payload.type,
        subjects: data.subjects
      }));
  }
}
export default {
  state: {
    movies: {
      subjects: []

    }
  },
  mutations,
  actions
}
