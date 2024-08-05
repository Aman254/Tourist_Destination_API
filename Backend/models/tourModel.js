const mongoose = require('mongoose');
// const slugify = require('slugify');

const tourSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A Tour Must have a name'],
      unique: true,
      trim: true,
      maxlength: [
        40,
        'A Tour name must have less than or equal to 40 characters'
      ],
      minlength: [10, 'A Tour name must have minimum 10 characters']
    },
    // slug: slugify,

    duration: {
      type: Number,
      required: [true, 'A tour must have a duration.']
    },
    maxGroupSize: {
      type: Number,
      required: [true, 'A tour must have a group size.']
    },
    difficult: {
      type: String,
      required: [true, 'A tour must have Difficulty']
    },
    ratingsAverage: {
      type: Number,
      default: 4.5,
      min: [1, 'Rating must be above 1.0'],
      max: [5, 'Rating must be below 5.0']
    },
    ratingsQuantity: {
      type: Number,
      default: 0
    },
    price: {
      type: Number,
      required: [true, 'A Tour Must have a Price']
    },
    priceDiscount: Number,
    summary: {
      type: String,
      trim: true,
      required: [true, 'A tour must have a summary']
    },
    description: {
      type: String,
      trim: true
    },
    imageCover: {
      type: String,
      required: [true, ' A tour must have a cover Image.']
    },
    images: {
      type: [String]
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false
    },
    startDates: [Date],

    secretTour: {
      type: Boolean,
      default: false
    }
  },
  {
    toJSON: { viratuals: true },
    toObject: { viratuals: true }
  }
);

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
