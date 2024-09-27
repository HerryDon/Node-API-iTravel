const mongoose = require("mongoose");
const express = require("express");
const { Town } = require("../model/townModel");

//addind data to mongodb
const addTown = async (req, res) => {
  try {
    const { city, id } = req.body;
    const town = await Town.create({
      city,
      id,
    });
    if (town) {
      res.status(200).json(town);
      console.log(town);
    } else {
      res.status(500).json({ message: "Error creating town" });
    }
  } catch (error) {
    console.log(error);
  }
};

//fetching town
const fetchTown = async (req, res) => {
  try {
    const town = await Town.find({});
    res.status(200).json(town);
  } catch (error) {
    res.status(500).json({ message: error.message });
   
  }
};

//fetching town by id
const fetchSingle = async (req, res) => {
  try {
    const { id } = req.params;
    const town = await Town.findById(id)
      res.status(200).json(town);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { addTown, fetchTown, fetchSingle };
