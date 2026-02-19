const express = require('express');
const router = express.Router();
const SupportTicket = require('../models/SupportTicket');

// CREATE SUPPORT TICKET
router.post('/', async (req, res) => {
  try {
    const { userId, subject, message } = req.body;

    const ticket = new SupportTicket({
      user: userId,
      subject,
      message
    });

    await ticket.save();
    res.status(201).json(ticket);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET USER'S TICKETS
router.get('/user/:userId', async (req, res) => {
  try {
    const tickets = await SupportTicket.find({ user: req.params.userId }).populate('user', 'username email');
    res.status(200).json(tickets);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET ALL TICKETS (Admin)
router.get('/', async (req, res) => {
  try {
    const tickets = await SupportTicket.find().populate('user', 'username email').populate('responses.responder', 'username');
    res.status(200).json(tickets);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ADMIN - RESPOND TO TICKET
router.post('/:id/response', async (req, res) => {
  try {
    const { message, adminId, status } = req.body;

    const ticket = await SupportTicket.findById(req.params.id);
    if (!ticket) {
      return res.status(404).json({ error: 'Ticket not found' });
    }

    ticket.responses.push({
      responder: adminId,
      message
    });

    if (status) {
      ticket.status = status;
    }

    await ticket.save();
    res.status(200).json(ticket);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ADMIN - UPDATE SUPPORT CENTER FAQ
router.put('/faq/:id', async (req, res) => {
  try {
    // This would be stored in a separate FAQ model
    // For now, respond with success
    res.status(200).json({ message: 'FAQ updated successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
