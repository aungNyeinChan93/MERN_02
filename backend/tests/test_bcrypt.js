import { compareSync, genSaltSync, hashSync } from 'bcrypt';


const Bcrypt = {
    hash: (payload, salt) => hashSync(payload, genSaltSync(salt || 10)),
    compare: (palinStr, hashStr) => compareSync(palinStr, hashStr)
};

const mypassword = '123123';

let hashPassoword = Bcrypt.hash(mypassword, 10);
console.log(hashPassoword);

if (Bcrypt.compare(mypassword, hashPassoword)) {
    console.log('yor are password is correct');
} else {
    console.log('false');
}




