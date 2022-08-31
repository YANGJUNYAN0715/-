const express = require("express");
const router = express.Router();

router.post("/post", (req, res) => {
  const body = req.body;
  res.send({
    status: 0,
    msg: "post 请求成功",
    data: body,
  });
});

router.get("/get", (req, res) => {
  const query = req.query;
  res.send({
    status: 0,
    msg: "GET 请求成功",
    data: query,
  });
});

module.exports = router;
