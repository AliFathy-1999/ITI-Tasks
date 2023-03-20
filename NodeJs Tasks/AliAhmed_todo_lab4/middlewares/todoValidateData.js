
const { validationResult, body } = require('express-validator');
// const mongoose = require('mongoose');
exports.validation = [
  body('title')
    .isLength( {min: 5, max: 20 } )
      .withMessage('title should be at least 5 and max 20 characters')
      .trim(),

  function( req, res, next ) { 
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(500).send({ errors:errors })
      }
      next();
  },

]