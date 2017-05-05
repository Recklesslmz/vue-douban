/**
 * Created by limuzi on 2017/5/5.
 */
import Vue from 'vue'
import axios from 'axios';

export default function (url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(commonUrl + url, {params}).then(response => {
      resolve(response.data)
      console.log(response)
    }, response => {
    })
  })
}
