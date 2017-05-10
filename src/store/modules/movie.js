/**
 * Created by limuzi on 2017/4/28.
 */
import * as type from '../douban-type'
import * as api from '../api'
import axios from 'axios'

const state = {
  hotMovies: []
}

const mutations = {
  getMovie(state, payload){
    switch (payload.tag) {
      case 'hotMovies':
        state.hotMovies = payload.res
        break
      default:
        state.hotMovies = payload.res
    }
  }
}
const actions = {
  getMovie({commit}){
    axios.get(commonUrl + '/v2/movie/in_theaters?count=8')
      .then(function (response) {
        console.log(response)
        commit({
          type: 'getMovie',
          tag: 'hotMovies',
          res: response.data.subjects
        })
      })
      .catch(function (error) {
      });
  }
}
export default {
  state,
  mutations,
  actions
}
