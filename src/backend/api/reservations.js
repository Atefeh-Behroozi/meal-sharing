const express = require('express');
const router = express.Router();
const knex = require('../database');

const validateRequestBody = (req, res, next) => {
  const { title } = req.body;
  if(!title) {
    return res.status(400).json({ error: 'Title is required'})
  }
  next();
};
router.get('/', async (req, res) => {
  try {
    const reservations = await knex('reservations').select('*');
    res.json(reservations);
  } catch (error) {
    res.status(500).json({ error: 'Error' });
  }
});

router.post('/', validateRequestBody, async (req, res) => {
  try {
    const reservation = await knex('reservations').insert(req.body);
    res.status(201).json(reservation);
  } catch (error) {
    res.status(500).json({ error: 'Error' });
  }
});

router.get('/:id', async (req, res) => {
    try {
      const reservation = await knex('reservations').select('*').where({ id: req.params.id }).first();
      if (reservation) {
        res.json(reservation);
      } else {
        res.status(404).json({ error: 'Reservation not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error' });
    }
  });
  
  router.put('/:id', validateRequestBody, async (req, res) => {
    try {
      const reservation = await knex('reservations').where({ id: req.params.id }).update(req.body);
      if (reservation) {
        res.json({ message: 'Reservation updated' });
      } else {
        res.status(404).json({ error: 'Reservation not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error' });
    }
  });
  
  router.delete('/:id', async (req, res) => {
    try {
      const reservation = await knex('reservations').where({ id: req.params.id }).del();
      if (reservation) {
        res.json({ message: 'Reservation deleted' });
      } else {
        res.status(404).json({ error: 'Reservation not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error' });
    }
  });
  
  module.exports = router;
  