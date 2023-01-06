const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController");
const validateToken = require("../middleware/auth");


router.get("", validateToken, cartController.getCart);

// 장바구니 추가
router.post("/add", cartController.addCart);

// 장바구니 수량변경 > PATCH /cart
router.patch("/quantity", cartController.updateCart);

// // 카트 선택삭제 > DELETE /cart
// router.delete("/cart", cartController.deleteCart);

// // 카트 전체삭제
// router.delete("/all", cartController.deleteAllCart);

// 모듈화
module.exports = {
  router
};