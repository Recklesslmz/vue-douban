/**
 * Created by limuzi on 2017/4/28.
 */
import Vue from 'vue'
import Vuex from 'vuex'

import movie from './modules/movie'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    movie
  }

})
