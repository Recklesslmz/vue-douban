/**
 * Created by limuzi on 2017/5/5.
 */
import fetch from './base'

export function getHotMovies(count) {
  return fetch(`/v2/movie/in_theaters`, {count});
}
