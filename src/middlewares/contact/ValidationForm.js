const yup = require('yup');
/**
 *  Middleware to validate and format yup errors.
 * @param {yup.AnyObjectSchema} schema
 * @returns
 */
const ValidationForm = (schema) => {
    return async (req, res, next) => {
        try {
            // Option abortEarly to false, to retrieve all the errors and not just stop at the first encounter.
            await schema.validate(req.body, { abortEarly: false });
            next();
        } catch ({ value, inner }) {
            /**
             * Format Errors form yup
             * {
             *    field : {
             *       type: Error Type (required, min, ...),
             *       message: Error Message,
             *       value: Value of the field,
             *    }
             * }
             */
            const formattedErrors = inner.reduce((acc, obj) => {
                let key = obj['path'];
                if (!acc[key]) {
                    acc[key] = { type: obj.type, message: obj.errors[0], value: obj.value };
                }
                return acc;
            }, {});
            req.hasFormError = true;
            req.formError = formattedErrors;
            next();
        }
    };
};

module.exports = ValidationForm;
