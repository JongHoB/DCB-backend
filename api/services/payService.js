require("dotenv").config();
const payDao = require("../models/payDao");


// const getItem = async (itemId) => {
//   const item = await itemsDao.getItem(itemId);
//   if (item.length === 0) {
//     const err = new Error("NOT FOUND : Item No.")
//     err.status = 404;
//     throw err;
//   }
//   return await itemsDao.getItem(itemId);
// };

module.exports = {
  // getItem
};