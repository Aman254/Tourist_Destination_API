const Tour = require('../models/tourModel');

exports.aliasTopTours = async (req, res, next) => {
  try {
    req.query.limit = '5';
    req.query.sort = '-ratingsAverage,price';
    req.query.fields = 'name,price,ratingsAverage,summary,difficulty';
    next();
  } catch (err) {}
};

class APIFeaatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  filter() {
    const queryObj = { ...req.this.queryString };
    //Specifying the Fields to that needs to be excluded from QueryObj
    const excludedFields = ['page', 'sort', 'limit', 'fields'];
    //Looping Over the Excludedfields and Deleting it from the query Ibj
    excludedFields.forEach(el => delete queryObj[el]);

    //1B) Advnced Filtering
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);

    this.query.find(JSON.parse(queryStr));
  }

  sort() {
    //2) Sorting
    if (this.queryString.sort) {
      const sortBy = req.query.sort.split(',').join(' ');
      this.query = this.query.sort(sortBy);
    } else {
      this.query = this.query.sort('-createdAt');
    }
  }
}

exports.getAllTours = async (req, res) => {
  try {
    /**Build The Query */

    //3) Field Limiting
    if (req.query.fields) {
      const fields = req.query.fields.split(',').join(' ');
      query = query.select('name duration price');
    } else {
      query = query.select('-__v');
    }

    //4) Pagination.
    const page = req.query.page * 1 || 1;
    const limit = req.query.limit * 1 || 100;

    const skip = (page - 1) * limit;

    query = query.skip(skip).limit(limit);

    if (req.query.page) {
      const numTours = await Tour.countDocuments();
      if (skip >= numTours) {
        throw new Error('This Page Does Not Exist');
      }
    }

    /**Execute the Query */
    const features = new APIFeatures(Tour.find(), req.query).filter().sort();

    const tours = await features.query;

    res.status(200).json({
      status: 'sucess',
      results: tours.length,
      data: {
        tours
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

//Getting a Tour By the ID
exports.getTour = (req, res) => {
  const id = req.params.id * 1;

  const tour = tours.find(el => el.id === id);

  res.status(200).json({
    status: 'sucess',
    data: {
      tour
    }
  });
};

//Creating a Tour
exports.createTour = (req, res) => {
  const newId = tours[tours.length - 1].id + 1;
  const newtour = Object.assign({ id: newId }, req.body);

  tours.push(newtour);

  fs.writeFile(
    `${__dirname}/../dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    () => {
      res.status(201).json({
        status: 'Sucess',
        data: {
          tour: newtour
        }
      });
    }
  );
};

//Updating a Tour by ID
exports.updateTour = async (req, res) => {
  const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  });

  res.status(200).json({
    status: 'success',
    data: {
      tour: tour
    }
  });
};

exports.deleteTour = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: null
  });
};
