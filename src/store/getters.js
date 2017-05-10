/**
 * Created by limuzi on 2017/5/10.
 */
//获取商品列表
const allProducts = (state) => state.products.all

//购物车商品
const cartProducts = (state) => state.cart.added

//购物车商品总价

const allPrice = (state) => {
  let products = state.cart.added
  let allprice = 0

  //便利获取的每个产品的数量和单价，获得单个产品的总价

  for (let i = products.length - 1; i >= 0; i--) {
    allprice += products[i].price * products[i].num
  }

  return allprice

}

const messageInfo = (state) => state.cart.mesageInfo


export default {
  allProducts,
  cartProducts,
  allPrice,
  messageInfo
}
