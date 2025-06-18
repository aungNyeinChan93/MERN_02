import validator from 'validator'

/**
 * Common Functions
isEmail(): Validates email addresses.

isURL(): Checks if a string is a URL.

escape(): Converts characters like < and > to HTML entities.

isMobilePhone(): Validates mobile phone numbers.
 * 
 */

const test_email = 'mgmg@gmail.com';

console.log(validator.isEmail(test_email) ? 'is email' : 'not email');

console.log(validator.isBoolean('true') ? 'is boolean ' : 'not boolean');

validator.isStrongPassword('Aung@123!@#') ? console.log('is strong ') : console.log('is weak')