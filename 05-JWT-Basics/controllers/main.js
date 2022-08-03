// check username, password in post(login) request
// if exist create new JWT
// send back to front-end

// setup authentication so only the request with JWT can access the dashboard

const CustomAPIError = require('../errors/custom-error');

const login = async (req, res) => {
  const { username, password } = req.body;

  // mongoose validation
  // Joi - another package that also validate
  // check in the controller

  if (!username || !password) {
    throw new CustomAPIError('Please provide email and password', 400);
  }

  console.log(username, password);
  res.send('Fake Login/Register/Signup Route');
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Hello, Nikson Rotondaro`,
    secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
  });
};

module.exports = {
  login,
  dashboard,
};