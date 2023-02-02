import * as Joi from 'joi';

export default Joi.object({
  PORT: Joi.number().required(),
  ROOT_USERNAME: Joi.string().required(),
  ROOT_PASSWORD: Joi.string().required(),
  MONGO_DB: Joi.string().required(),
  MONGO_PORT: Joi.number().required(),
  MONGO_HOST: Joi.string().required(),
  MONGO_CONNECTION: Joi.string().required(),
});
