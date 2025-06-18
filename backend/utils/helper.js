import jwt from 'jsonwebtoken';
import { compareSync, genSaltSync, hashSync } from 'bcrypt';

// json web token 
export const JWT = {
    gen_token: (payload, secrect_key) => jwt.sign(payload, secrect_key, { algorithm: 'HS256' }),
    verify_token: (token, secrect_key) => jwt.verify(token, secrect_key, { algorithms: 'HS256' }, (err, decode) => {
        if (!err) {
            return decode;
        }
    })

};

// Bcrypt
export const Bcrypt = {
    hash: (payload) => hashSync(payload, genSaltSync(10)),
    compare: (palinStr, hashStr) => compareSync(palinStr, hashStr)
};

