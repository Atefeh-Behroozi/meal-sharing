const express = require('express');
const router = express.Router();
const knex = require('../database');

// GET all reviews
router.get('/', async (req, res) => {
  try {
    const reviews = await knex('reviews').select('*');
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

// GET reviews for a specific meal
router.get('/meals/:meal_id', async (req, res) => {
  const { meal_id } = req.params;
  try {
    const reviews = await knex('reviews').select('*').where({ meal_id });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

// POST a new review
router.post('/', async (req, res) => {
  const { meal_id, title, description } = req.body;
  try {
    const review = await knex('reviews').insert({ meal_id, title, description });
    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

// GET a review by id
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const review = await knex('reviews').select('*').where({ id }).first();
    if (review) {
      res.json(review);
    } else {
      res.status(404).json({ error: 'Review not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

// PUT update a review by id
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  try {
    const updatedReview = await knex('reviews').where({ id }).update({ title, description });
    if (updatedReview) {
      res.json({ message: 'Review updated' });
    } else {
      res.status(404).json({ error: 'Review not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

// DELETE a review by id
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedReview = await knex('reviews').where({ id }).del();
    if (deletedReview) {
      res.json({ message: 'Review deleted' });
    } else {
      res.status(404).json({ error: 'Review not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

module.exports = router;
