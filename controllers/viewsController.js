const Tour = require('../models/tourModel');
const User = require('../models/userModel');
const Booking = require('../models/bookingModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.getOverview = catchAsync( async(req, res, next) => {
    // 1 - Get tour data from collection
    const tours = await Tour.find();
    // 2 - Build the template 

    // 3 - Render that template using tour data from step 1
    res.status(200).render('overview', {
      title: 'All Tours',
      tours
    });
  });

exports.getTour = catchAsync(async (req, res, next) => {
  // 1 - get the data, for the requested tour (including reviews and guides)
  const tour = await Tour.findOne({ slug: req.params.slug }).populate({
    path: 'reviews',
    fields: 'review rating user'
  });

  if(!tour) {
    return next(new AppError('There is no tour with that name', 404));
  };
  // 2 - Build the template 

  // 3 - Render template using data from step 1
    res.status(200).render('tour', {
      title: `${tour.name}`,
      tour
    });
  });

exports.getLoginForm = (req, res) => {
  res.status(200).render('login', {
    title: 'Log into your account'
  });
};

exports.getAccount = (req, res) => {
  res.status(200).render('account', {
    title: 'Your account'
  });
};

exports.updateUserData = catchAsync(async (req, res, next) => {
  const updatedUser = await User.findByIdAndUpdate(req.user.id, {
    name: req.body.name,
    email: req.body.email
  }, {
    new: true,
    runValidators: true
  });

  res.status(200).render('account', {
    title: 'Your account',
    user: updatedUser
  });
});

exports.getMyTours = catchAsync(async (req, res, next) => {
  const bookings = await Booking.find({ user: req.user.id });

  const tourIDs = bookings.map(el => el.tour);
  const tours = await Tour.find({ _id: { $in: tourIDs }});

  res.status(200).render('overview', {
    title: 'My Tours',
    tours
  });
});