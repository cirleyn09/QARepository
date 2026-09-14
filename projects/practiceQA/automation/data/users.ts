import { practiceQAEnv } from '../utils/env';

type UserCredentials = {
    email: string;
    password: string;
};

type TestUsers = {
    validUser: UserCredentials;
    invalidUser: UserCredentials;
};

export const users: TestUsers = {
    validUser: {
        email: practiceQAEnv.email,
        password: practiceQAEnv.password
    },
    invalidUser: {
        email: 'wrong@test.com',
        password: 'wrongpassword'
    }
};