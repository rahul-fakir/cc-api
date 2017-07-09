  const userController = require('../controllers/userController');

  const handleUserRegistrationRoute = (req, res) => {
    req.checkBody('email', 'email field cannot be empty').notEmpty();
    req.checkBody('password', 'newUserPassword field cannot be empty').notEmpty();
    req.checkBody('email', 'email field contains an invalid email string').isEmail();

    if (req.validationErrors()) {
      return res.status(400).send({
        status: false,
        code: 101,
        message: 'Paramter fields do not conform to required structure',
        params: req.validationErrors(),
      });
    }

    userController.registerUser(req.body.email, req.body.password, req.body.name)
    .then((user) => {
      res.status(200).send({
        status: true,
        message: 'User successfully created',
        user: user.email,
      });
    })
    .catch((err) => {
      console.log(err)
      res.status(409).send({
        status: false,
        code: 100,
        message: 'An account is already registered with this email address',
        err,
      });
    });
  };

  const handleGetUserRoute = (req, res) => {
    if (req.validationErrors()) {
      return res.status(400).send({
        status: false,
        code: 101,
        message: 'Paramter fields do not conform to required structure',
        params: req.validationErrors(),
      });
    }

    userController.getUser(req.user.email)
    .then((user) => {
      res.status(200).send({
        status: true,
        user,
      });
    })
    .catch((err) => {
      res.status(404).send({
        status: false,
        code: 102,
        message: 'Could not find user',
        err,
      });
    });
  };

  module.exports = {
    handleGetUserRoute,
    handleUserRegistrationRoute,
  };
