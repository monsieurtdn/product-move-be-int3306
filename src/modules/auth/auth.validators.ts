import Joi from 'joi';
import {
    INPUT_TEXT_MAX_LENGTH,
    PASSWORD_MIN_LENGTH,
    Regex,
} from 'src/common/constants';

export const loginSchema = Joi.object().keys({
    email: Joi.string()
        .max(INPUT_TEXT_MAX_LENGTH)
        .regex(Regex.EMAIL)
        .required(),
    password: Joi.string()
        .min(PASSWORD_MIN_LENGTH)
        .max(INPUT_TEXT_MAX_LENGTH)
        .regex(Regex.PASSWORD)
        .required(),
});
