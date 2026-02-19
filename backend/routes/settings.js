const express = require('express');
const router = express.Router();
const Settings = require('../models/Settings');

// GET settings
router.get('/', async (req, res) => {
  try {
    let settings = await Settings.findOne();
    
    // Create default settings if none exist
    if (!settings) {
      settings = new Settings();
      await settings.save();
    }
    
    res.status(200).json(settings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE settings
router.put('/', async (req, res) => {
  try {
    let settings = await Settings.findOne();
    
    if (!settings) {
      settings = new Settings(req.body);
    } else {
      // Update social media links
      if (req.body.socialMedia) {
        settings.socialMedia = {
          ...settings.socialMedia,
          ...req.body.socialMedia
        };
      }
      
      // Update company info
      if (req.body.companyInfo) {
        settings.companyInfo = {
          ...settings.companyInfo,
          ...req.body.companyInfo
        };
      }
      
      settings.updatedAt = Date.now();
    }
    
    await settings.save();
    res.status(200).json({ message: 'Settings updated successfully', settings });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
