const mongoose = require('mongoose');

const settingsSchema = new mongoose.Schema({
  socialMedia: {
    telegram: {
      type: String,
      default: ''
    },
    whatsapp: {
      type: String,
      default: ''
    },
    youtube: {
      type: String,
      default: ''
    },
    tiktok: {
      type: String,
      default: ''
    },
    instagram: {
      type: String,
      default: ''
    },
    facebook: {
      type: String,
      default: ''
    },
    twitter: {
      type: String,
      default: ''
    },
    linkedin: {
      type: String,
      default: ''
    },
    discord: {
      type: String,
      default: ''
    },
    email: {
      type: String,
      default: 'support@extradollaracademy.com'
    }
  },
  companyInfo: {
    name: {
      type: String,
      default: 'Extra Dollar Academy'
    },
    tagline: {
      type: String,
      default: 'Learn to Trade Like a Pro'
    },
    description: {
      type: String,
      default: 'Professional trading education platform'
    }
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Settings', settingsSchema);
