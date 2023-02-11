const { Product } = require("../models/Product.js");
const gravatarUrl = require("gravatar-url");

const getAllProduct = async (req, res) => {
  const getList = await Product.find();
  try {
    res.status(200).send(getList);
  } catch (error) {
    res.status(404).send(error);
  }
};
const getDetailProduct = async (req, res) => {
  const getDetail = await Product.findById(req.params.id);
  try {
    if (getDetail) {
      res.status(200).send(getDetail);
    } else {
      res.status(404).send("Khong ton tai id nay");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
const createProduct = async (req, res) => {
  //upload img
  const avatarDefault = gravatarUrl(req.body.name);
  const newProduct = new Product({
    ...req.body,
    img:avatarDefault
  });
  try {
    if (newProduct) {
      //dat avatar mac dinh khi tao tk moi
      await newProduct.save();
      res.status(201).send(newProduct);
    } else {
      res.status(404).send("Not found");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
const updateProduct = async (req, res) => {
  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true }
  );
  try {
    res.status(200).send(updatedProduct);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const delProduct = await Product.findByIdAndDelete(req.params.id);
    if (delProduct) {
      res.status(200).send("Xoa thanh cong");
    } else {
      res.status(404).send("Id khong ton tai");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

//upload img
const uploadAvatar = async (req, res) => {
  const { id } = req.params;
  const { path } = req.file;
  const userFound = await Product.findById(id)
  userFound.img = `http://localhost:8069/${path}`;
  await userFound.save();
  res.send(userFound);
};

module.exports = {
  getAllProduct,
  getDetailProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  uploadAvatar,
};
