const mongoose = require("mongoose");
const express = require("express");
const { User } = require("../model/userModel");

//Create new User
const createUser = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;
    const user = await User.create({
      username,
      email,
      phone,
      password,
    });
    if (user) {
      res.status(200).json(user);
      console.log(user);
    } else {
      res.status(500).json({ message: "Error creating user" });
    }
  } catch (error) {
    console.log(error);
  }
};


module.exports = {createUser};

