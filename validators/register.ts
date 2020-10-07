import validator from 'express-validator';

export const registerValidations = [
  validator
    .body('email', 'Enter you email')
    .isEmail()
    .withMessage('Wrong email')
    .isLength({
      min: 10,
      max: 40,
    })
    .withMessage('Only from 10 to 40 symbols can be'),
  validator
    .body('fullname', 'Enter you fullname')
    .isString()
    .isLength({
      min: 2,
      max: 40,
    })
    .withMessage('Only from 2 to 40 symbols can be'),
  validator
    .body('username', 'Enter you username')
    .isString()
    .isLength({
      min: 2,
      max: 40,
    })
    .withMessage('Only from 2 to 40 symbols can be'),
  validator
    .body('password', 'Enter you password')
    .isString()
    .isLength({
      min: 6,
      max: 40,
    })
    .withMessage('Only from 6 to 40 symbols can be'),
];
