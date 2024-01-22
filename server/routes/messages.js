const {
  addMessage,
  getMessages,
  createGroup,
  grpMsg,
  allgroups,
  getgrpmsg,
  addToGroup,
} = require("../controllers/messageController");
const router = require("express").Router();

router.post("/addmsg/", addMessage);
router.post("/getmsg/", getMessages);
router.post("/addgrp/", createGroup);
router.post("/addtogrp/", addToGroup);
router.post("/addgrpMsg/:id", grpMsg);
router.get("/allgroups/:name", allgroups);
router.post("/getgrpmsg/:id", getgrpmsg);

module.exports = router;