
const {validationResult,body,param} = require('express-validator');
exports.validation =  [
  body('username')
      .isLength({min: 8 })
      .withMessage('username should be at least 8 characters')
      .trim(),
  body('firstName')
      .isLength({min: 3 ,max:15})
      .withMessage('username should be at least 3 and max 15 characters')
      .trim(),
  body('lastName')
      .isLength({min: 3 ,max:15})
      .withMessage('username should be at least 3 and max 15 characters')
      .trim(),
  body('dob')
      .isDate()
      .withMessage('DOB must be similar to this formate yyyy/mm/dd')
      .trim(),    
  function(req,res,next) { 
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(500).send({ errors:errors })
      }
      next();
  },

]