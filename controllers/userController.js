const User = require('../models/userModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach(el => {
    if(allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};

exports.getAllUsers = factory.getAll(User);

exports.updateMe = catchAsync( async(req, res, next) => {
  // 1 - CREATE ERROR IF USER POSTS PASSWORD DATA
  if(req.body.password || req.body.passwordConfirm) {
    return next(new AppError('This route is not for password updates. Please use /updateMyPassword.', 400));
  };
  // 2 - FILTERED OUT UNWANTED FILEDS NAMES THAT ARE NOT ALLOWED TO BE UPDATED
  const filteredBody = filterObj(req.body, 'name', 'email');

  // 3 - UPDATE THE USER DOCUMENT
  const updatedUser = await User.findByIdAndUpdate(req.user.id, filteredBody, {
    new: true, 
    runValidators: true
  });

  res.status(200).json({
    status: 'success',
    data: {
      user: updatedUser
    }
  });
});

exports.deleteMe = catchAsync( async(req, res, next) => {
  await User.findByIdAndUpdate(req.user.id, { active: false })

  res.status(204).json({
    status: 'success',
    data: null
  });
});

exports.createUser = catchAsync(async (req, res, next) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not defined! Please use SignUp instead'
  })
});

exports.getUser = factory.getOne(User);

exports.updateUser = factory.updateOne(User);

exports.deleteUser = factory.deleteOne(User);
