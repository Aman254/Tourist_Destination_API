const express = require('express');

const router = express.Router();

const tourRoutes = require('../controllers/tourController');

router.route('/tour-stats').get(tourRoutes.getTourStats);
router.route('/monthly-plan/:year').get(tourRoutes.getMonthlyPlan);

router
  .route('/top-5-cheap')
  .get(tourRoutes.aliasTopTours, tourRoutes.getAllTours);

router.route('/').get(tourRoutes.getAllTours).post(tourRoutes.createTour);

router
  .route('/:id')
  .get(tourRoutes.getTour)
  .patch(tourRoutes.updateTour)
  .delete(tourRoutes.deleteTour);

module.exports = router;
