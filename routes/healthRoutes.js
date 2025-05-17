// routes/healthRoutes.js

const express = require('express');
const router = express.Router();
const { 
  getHealth,
  getReadiness,
  getLiveness
} = require('../controllers/healthController');

router.get('/', getHealth);
router.get('/ready', getReadiness);
router.get('/live', getLiveness);

module.exports = router;