const Joi = require("joi");
const passwordExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$/;

module.exports = {
    registerationSchema: Joi.object().keys({
        name: Joi.string().min(3).max(30).required().messages({
            "string.required": "Name is required"
        }),
        email: Joi.string().email().min(3).max(30).required().messages({
            "string.required": "Email is required",
            "string.email": "Invalid Email"
        }),
        password: Joi.string().regex(passwordExp).required().messages({
            "string.required": "Password is required"
        }),
        address: Joi.string().min(3).max(30).required().messages({
            "string.required": "Address is required"
        }),
        nationalId: Joi.number().integer().min(10000000000000).max(99999999999999).required().messages({
            "number.required": "National Id is required",
            "number.min": "National Id must be equal to 14 digit",
            "number.max": "National Id must be equal to 14 digit"
        }),
        phone: Joi.string().regex(/^01\d{9}$/).required().messages({
            "string.required": "Phone is required"
        }),
    }),
    loginSchema: Joi.object().keys({
        email: Joi.string().email().min(3).max(30).required().messages({
            "string.required": "Email is required",
            "string.email": "Invalid Email"
        }),
        password: Joi.string().required().messages({
            "string.required": "Password is required"
        }),
    }),
};