/**
 * Created by limuzi on 2017/5/5.
 */
import api from './api'


//调用获取商品列表方法的action
const getAllProducts = (context) => {
  let commit = context.commit
  api.getProducts((products) => {
    commit('receive_product', products)
  })
}

//调用增加购物车商品列表方法action
const addToCart = (context, productInfo) => {
  let commit = context.commit

  if (productInfo.inventory > 0) {
    commit('add_to_cart', productInfo)
  }
}

//删除方法
const deleteCartProduct = (context, productInfo) => {
  let commit = context.commit

  if (productInfo.inventory > 0) {
    commit('delete_cart_product', productInfo)
  }
}

const submitCart = (context) => {
  let commit = context.commit
  commit('submit_cart_product')
}

export default {
  getAllProducts,
  addToCart,
  deleteCartProduct,
  submitCart
}
