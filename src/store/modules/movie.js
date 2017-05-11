/**
 * Created by limuzi on 2017/4/28.
 */
import {GET_TOP250_MOVIE} from '../douban-type'
import axios from 'axios'

const state = {
  hotMovies: []
}

const mutations = {
  [GET_TOP250_MOVIE](state, movies){
    state.hotMovies = movies
  }
}
const actions = {
  [GET_TOP250_MOVIE]({commit}){
    axios.get(commonUrl + '/v2/movie/in_theaters?count=8')
      .then((response)=> {
        commit('GET_TOP250_MOVIE', response.data.subjects
        )
      })
  }
}
export default {
  state,
  mutations,
  actions
}
