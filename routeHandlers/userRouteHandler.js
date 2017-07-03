  const userController = require('../controllers/userController.js')
  
  const handleUserRegistrationRoute = (req, res) => {
    req.checkBody('email', 'email field cannot be empty').notEmpty();
    req.checkBody('password', 'newUserPassword field cannot be empty').notEmpty();
    req.checkBody('email', 'email field contains an invalid email string').isEmail();

    if (req.validationErrors()) {
      return res.status(400).send({ errors: req.validationErrors() });
    }
    
    userController.registerUser(req.body.email, req.body.password, req.body.name)
    .then((user) => {
      res.status(200).send(user)
    })
    .catch((err) => {
      res.status(409).send(err)
    })
  };

const handleGetUserRoute = (req, res) =>  {
    req.checkBody('email', 'email field cannot be empty').notEmpty();
    req.checkBody('email', 'email field contains an invalid email string').isEmail();
    
    if (req.validationErrors()) {
      return res.status(400).send({ errors: req.validationErrors() });
    }
    
    userController.getUser(req.body.email)
    .then((user) => {
      res.status(200).send(user)
    })
    .catch((err) => {
      res.status(409).send(err)
    })
  }

  module.exports = {
    handleGetUserRoute,
    handleUserRegistrationRoute
  }