const yup = require('yup');

const ContactFormValidationSchema = yup.object().shape({
    pseudo: yup.string().required(),
    email: yup.string().email().required(),
    first_name: yup.string(),
    last_name: yup.string(),
    message: yup.string().required(),
});

module.exports = { ContactFormValidationSchema };
