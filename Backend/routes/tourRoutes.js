const express = require('express');

const router = express.Router();

const tourRoutes = require('../controllers/tourController');

router.route('/').get(tourRoutes.getAllTours).post(tourRoutes.createTour);

router
  .route('/:id')
  .get(tourRoutes.getTour)
  .patch(tourRoutes.updateTour)
  .delete(tourRoutes.deleteTour);

module.exports = router;
