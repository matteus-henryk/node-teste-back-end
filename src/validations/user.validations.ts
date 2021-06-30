import { celebrate, Joi, Segments } from "celebrate";

const createUserValidationFormat = celebrate(
  {
    [Segments.BODY]: {
      name: Joi.string().min(3).required(),
      lastname: Joi.string().min(3).required(),
      nickname: Joi.string().min(3).max(30).required(),
      address: Joi.string().min(3).required(),
      bio: Joi.string().max(100)
    }
  },
  {
    abortEarly: false
  }
);


const updateLastnameAddressValidationFormat = celebrate(
  {
    [Segments.BODY]: {
      lastname: Joi.string().min(3).required(),
      address: Joi.string().min(3).required()
    }
  },
  {
    abortEarly: false
  }
);

const updateNicknameValidationFormat = celebrate(
  {
    [Segments.BODY]: {
      nickname: Joi.string().min(3).max(30)
    }
  },
  {
    abortEarly: false
  }
);

export {
  createUserValidationFormat,
  updateLastnameAddressValidationFormat,
  updateNicknameValidationFormat
};
