import emailValidator from 'email-validator';

export const isNotEmpty = (value) => value && value.length > 0;
export const isValidEmail = (value) => isNotEmpty(value) && emailValidator.validate(value);
