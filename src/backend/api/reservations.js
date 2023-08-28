const express = require('express');
const router = express.Router();
const knex = require('../database');

const validateRequestBody = (req, res, next) => {
  
  const requiredFields = ['number_of_guests', 'meal_id', 'contact_phonenumber', 'contact_email'];
  const missingFields = requiredFields.filter((field) => !req.body[field]);
  
  if (missingFields.length > 0) {
    return res.status(400).json({ error: 'Incomplete reservation data' });
  }

  if (isNaN(req.body.number_of_guests) || isNaN(req.body.meal_id)) {
    return res.status(400).json({ error: 'Invalid type. Expected Number' });
  }

  next();
};

router.get('/', async (req, res) => {
  try {
    const reservations = await knex('reservation').select('*');
    res.json(reservations);
  } catch (error) {
    res.status(500).json({ error: 'Error' });
  }
});

router.post('/', validateRequestBody, async (req, res) => {
  try {
    await knex('reservation').insert(req.body);
    res.status(201).json({ message: 'Reservation successful' });
    console.log(res);
  } catch (error) {
    res.status(500).json({ error: 'Error' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const reservation = await knex('reservation').select('*').where({ id: req.params.id }).first();
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
    const updatedReservation = await knex('reservation')
      .where({ id: req.params.id })
      .update(req.body);
      if (updatedReservation) {
        res.json({ message: 'Reservation updated successfully' });
      } else {
        res.status(404).json({ error: 'Reservation not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while updating the reservation' });
    }
  });
    
  router.delete('/:id', async (req, res) => {
    try {
      const deletedReservation = await knex('reservation')
        .where({ id: req.params.id })
        .del();
  
      if (deletedReservation) {
        res.json({ message: 'Reservation deleted successfully' });
      } else {
        res.status(404).json({ error: 'Reservation not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while deleting the reservation' });
    }
  });

module.exports = router;