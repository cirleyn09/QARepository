import { getEnvVariable } from '../utils/env';

type UserCredentials = {
    email: string;
    password: string;
};

type TestUsers = {
    validUser: UserCredentials;
    invalidUser: UserCredentials;
};

export const users: TestUsers = {
    get validUser() {
        return {
            email: getEnvVariable('PRACTICE_QA_EMAIL'),
            password: getEnvVariable('PRACTICE_QA_PASSWORD')
        };
    },
    invalidUser: {
        email: 'wrong@test.com',
        password: 'wrongpassword'
    }
};
