const Tour = require('../models/tourModel');

exports.getAllTours = async (req, res) => {
  try {
    /**Build The Query */

    //1A) Filtering
    //Destructuing The Req.query
    const queryObj = { ...req.query };
    //Specifying the Fields to that needs to be excluded from QueryObj
    const excludedFields = ['page', 'sort', 'limit', 'fields'];
    //Looping Over the Excludedfields and Deleting it from the query Ibj
    excludedFields.forEach(el => delete queryObj[el]);

    //1B) Advnced Filtering
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);

    let query = Tour.find(JSON.parse(queryStr));

    //2) Sorting
    if (req.query.sort) {
      const sortBy = req.query.sort.split(',').join(' ');
      query = query.sort(sortBy);
    } else {
      query = query.sort('-createdAt');
    }

    //3) Field Limiting
    if (req.query.fields) {
      const fields = req.query.fields.split(',').join(' ');
      query = query.select('name duration price');
    } else {
      query = query.select('-__v');
    }

    /**Execute the Query */
    const tours = await query;

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
