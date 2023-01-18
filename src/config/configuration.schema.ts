import * as Joi from 'joi';

export default Joi.object({
  API_KEY: Joi.string().required(),
  PORT: Joi.number().required(),
  DATA_BSE_HOST: Joi.string().required(),
  DATA_BASE_PORT: Joi.number().required(),
  DATA_BASE_NAME: Joi.string().required(),
});
