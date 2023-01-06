const cartService = require("../services/cartService");
const { asyncErrorHandler } = require("../middleware/errorHandling");


const getCart = asyncErrorHandler(async (req, res) => {
  const cartList = await cartService.getCart(req.userId);
  return res.status(200).json({ data: cartList });
});


// 장바구니 추가 > POST cart
// res.status(201) - 성공적으로 추가함
const addCart = asyncErrorHandler(async (req, res) => {
  const added = await cartService.addCart(req.itemId);
  return res.status(201).json({ data: added });
});

// 장바구니 수량변경 > PATCH /cart
const updateCart = asyncErrorHandler(async (req, res) => {
  const { quantity, itemsId } = req.body
  const userId = req.users.id

  await cartService.updateCart(quantity, itemsId, userId);
  res.status(201).json({ message: "Success updating quantities" });
});



// // 카트 선택삭제 > DELETE /cart
// // res.status(204)
// const deleteCart = asyncErrorHandler(async (req, res) => {
//   const cartId = req.params.cartId
//   const userId = req.users.id

//   await cartService.deleteCart(cartId, userId);
//   res.status(204).json({ message: "Success delete cart list" });
// });


// // 카트 전체삭제 > DELETE /ALL
// // res.status(204)
// const deleteAllCart = asyncErrorHandler(async (req, res) => {
//   const /////////
// });

module.exports = {
  getCart,
  addCart,
  updateCart,
  // deleteCart,
  // deleteAllCart
}