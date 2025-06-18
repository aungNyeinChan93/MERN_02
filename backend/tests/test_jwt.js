import jwt from 'jsonwebtoken';
import { JWT as T } from '../utils/helper.js';

import { config } from 'dotenv';

config()

// package testing
const JWT = {
    gen_token: (payload) => jwt.sign(payload, 'secret_key_123', { algorithm: 'HS256' }),
    verify_token: (token) => jwt.verify(token, 'secret_key_123', { algorithms: 'HS256' })
}
const test_decode = JWT.gen_token({ name: 'aung', _id: '123123123' });
console.log(test_decode);
console.log(JWT.verify_token(test_decode));

// usecase testing
const token = T.gen_token({ id: 123 }, '123asd!@#');
console.log(token);
console.log(T.verify_token(token, '123asd!@#'));


// console.log(process.env.JWT_SECRET);

