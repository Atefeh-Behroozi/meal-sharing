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

    const meals = await knex('meals').select('*');
    res.json(meals);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while retrieving meals' });
  }
});

// POST a new meal
router.post('/', validateRequestBody, async (req, res) => {
  try {
    const meal = await knex('meals').insert(req.body);
    res.status(201).json(meal);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while creating a meal' });
  }
});

// GET a meal by id
router.get('/:id', async (req, res) => {
  try {
    const meal = await knex('meals').select('*').where({ id: req.params.id }).first();
    if (meal) {
      res.json(meal);
    } else {
      res.status(404).json({ error: 'Meal not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while retrieving the meal' });
  }
});

// PUT update a meal by id
router.put('/:id', validateRequestBody, async (req, res) => {
  try {
    const meal = await knex('meals').where({ id: req.params.id }).update(req.body);
    if (meal) {
      res.json({ message: 'Meal updated' });
    } else {
      res.status(404).json({ error: 'Meal not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while updating the meal' });
  }
});

// DELETE a meal by id
router.delete('/:id', async (req, res) => {
  try {
    const meal = await knex('meals').where({ id: req.params.id }).del();
    if (meal) {
      res.json({ message: 'Meal deleted' });
    } else {
      res.status(404).json({ error: 'Meal not found' });
    } 
  } catch (error) {

    res.status(500).json({ error: 'An error occurred while deleting the meal' });
  }
});

module.exports = router;
