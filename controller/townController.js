const mongoose = require("mongoose");
const express = require("express");
const { Town } = require("../model/townModel");
const asyncHandler = require('express-async-handler')// for asynch express used in controller(fetchTown)

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
//had to install express async handler to be used here
//the error used is to secure the app details from displaying when there is error
//each and every async can use the asynch handler or the format used below to secure data when error occurs
const fetchSingle = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const town = await Town.findById(id);
    res.status(200).json(town);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

module.exports = { addTown, fetchTown, fetchSingle };
