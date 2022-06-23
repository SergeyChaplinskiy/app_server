const Joi = require('joi');

const userValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string()
      .min(3)
      .max(50)
      .required(),
    surname: Joi.string()
      .min(3)
      .max(50)
      .required(),
    age: Joi.number()
      .min(1)
      .max(150)
      .required(),
    email: Joi.string()
      .min(6)
      .max(50)
      .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
      .required(),
    phoneNumber: Joi.number()
      .integer()
      .max(10000000000)
      .allow(null)
      .required(),
  });
  return schema.validate(data);
};
module.exports.userValidation = userValidation;
