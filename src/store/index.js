/**
 * Created by limuzi on 2017/4/28.
 */
import Vue from 'vue'
import Vuex from 'vuex'

import action from './action'
import getter from './getters'

import movie from './modules/movie'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    movie
  }
})
