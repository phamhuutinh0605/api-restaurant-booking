const { Product } = require("../models/Product.js");
const { Type } = require("../models/Type.js");
const getAllProduct = async (req, res) => {
  const price=req.query.name;
  try {
    if(price){
      const getList = await Product.find({ price: { $gte:price[0], $lte:price[1]}});
      console.log(getList)
      res.status(200).send(getList);
    }else{
      const getList = await Product.find().populate("type");
      res.status(200).send(getList);
    }
  } catch (error) {
    res.status(404).send(error);
  }
};

const getDetailProduct = async (req, res) => {
  const getDetail = await Product.findById(req.params.id).populate("type");
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
  const newProduct = new Product({
    ...req.body,
  });
  try {
    if (req.body.type) {
      const type = Type.findById({ _id: req.body.type });
      await type.updateOne({ $push: { product: newProduct._id } });
      if (newProduct) {
        await newProduct.save();
        res.status(201).send(newProduct);
      } else {
        res.status(404).send("Not found");
      }
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

module.exports = {
  getAllProduct,
  getDetailProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
