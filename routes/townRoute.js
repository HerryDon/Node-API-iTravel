const express = require("express");
const Town = require("../model/townModel");
const {
  addTown,
  fetchTown,
  fetchSingle,
} = require("../controller/townController");

const router = express.Router();
router.use(express.json());

//allowing url encoding
router.use(express.urlencoded({ extended: false }));

//adding a town
router.post("/addTown", addTown);
//fetch towns
router.get("/fetchTown", fetchTown);
//fetch town by id
router.get("/fetchSingle/:id", fetchSingle);

module.exports = router;
