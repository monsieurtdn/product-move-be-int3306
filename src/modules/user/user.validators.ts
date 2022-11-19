import Joi from 'joi';
import {
    INPUT_TEXT_MAX_LENGTH,
    PASSWORD_MIN_LENGTH,
    Regex,
} from 'src/common/constants';
import { UserRole } from './user.constants';

export const createUserSchema = Joi.object().keys({
    username: Joi.string().max(INPUT_TEXT_MAX_LENGTH).required(),
    role: Joi.string()
        .valid(...Object.values(UserRole))
        .required(),
    password: Joi.string()
        .min(PASSWORD_MIN_LENGTH)
        .max(INPUT_TEXT_MAX_LENGTH)
        .regex(Regex.PASSWORD)
        .required(),
});

export const updateUserSchema = Joi.object().keys({
    confirmPassword: Joi.string()
        .min(PASSWORD_MIN_LENGTH)
        .max(INPUT_TEXT_MAX_LENGTH)
        .required(),

    password: Joi.string()
        .min(PASSWORD_MIN_LENGTH)
        .max(INPUT_TEXT_MAX_LENGTH)
        .optional(),
});
