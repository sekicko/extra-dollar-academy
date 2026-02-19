const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const Course = require('../models/Course');
const User = require('../models/User');

// ADMIN - GET DASHBOARD STATS
router.get('/dashboard/stats', async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalCourses = await Course.countDocuments();
    const totalProducts = await Product.countDocuments();
    const adminUsers = await User.countDocuments({ isAdmin: true });

    res.status(200).json({
      totalUsers,
      totalCourses,
      totalProducts,
      adminUsers
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ADMIN - GET ALL USERS
router.get('/users', async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ADMIN - CREATE PRODUCT
router.post('/products', async (req, res) => {
  try {
    const { name, description, type, price, fileUrl, documentation, compatibility, isPaid } = req.body;

    const product = new Product({
      name,
      description,
      type,
      price,
      fileUrl,
      documentation,
      compatibility,
      isPaid
    });

    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ADMIN - UPDATE PRODUCT
router.put('/products/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ADMIN - DELETE PRODUCT
router.delete('/products/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ADMIN - GET ALL PRODUCTS
router.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
