import Joi from 'joi';
import {
    INPUT_TEXT_MAX_LENGTH,
    PASSWORD_MIN_LENGTH,
    PHONE_NUMBER_MAX_LENGTH,
} from 'src/common/constants';

export const updateUserSchema = Joi.object().keys({
    confirmPassword: Joi.string()
        .min(PASSWORD_MIN_LENGTH)
        .max(INPUT_TEXT_MAX_LENGTH)
        .required(),

    phoneNumber: Joi.string().max(PHONE_NUMBER_MAX_LENGTH).optional(),
    name: Joi.string().max(INPUT_TEXT_MAX_LENGTH).optional(),
    password: Joi.string()
        .min(PASSWORD_MIN_LENGTH)
        .max(INPUT_TEXT_MAX_LENGTH)
        .optional(),
});
