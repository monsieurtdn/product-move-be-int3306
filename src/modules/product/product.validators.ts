import {
    AREA_TEXT_MAX_LENGTH,
    INPUT_TEXT_MAX_LENGTH,
    MIN_POSITIVE_NUMBER,
} from 'src/common/constants';
import Joi from 'src/plugins/joi';
import {
    ProductColor,
    ProductLocation,
    ProductStatus,
} from './product.constants';

export const createProductLineSchema = Joi.object().keys({
    name: Joi.string().max(INPUT_TEXT_MAX_LENGTH).required(),
    price: Joi.number().required(),
});

export const createProductSchema = Joi.object().keys({
    productLineId: Joi.isObjectId().required(),
    storageId: Joi.isObjectId().required(),
    name: Joi.string().max(INPUT_TEXT_MAX_LENGTH).required(),
    description: Joi.string().max(AREA_TEXT_MAX_LENGTH).required(),
    weight: Joi.number().min(MIN_POSITIVE_NUMBER).required(),
    displaySize: Joi.number().min(MIN_POSITIVE_NUMBER).required(),
    bodySize: Joi.string().max(INPUT_TEXT_MAX_LENGTH).required(),
    color: Joi.string()
        .valid(...Object.values(ProductColor))
        .required(),
    bodyBuild: Joi.string().max(INPUT_TEXT_MAX_LENGTH).required(),
    batteryVolume: Joi.number().min(MIN_POSITIVE_NUMBER).required(),
    status: Joi.string()
        .valid(...Object.values(ProductStatus))
        .required(),
    location: Joi.string()
        .valid(...Object.values(ProductLocation))
        .required(),
    sold: Joi.boolean().required(),
    soldDate: Joi.date().required().allow(null),
});
