export const invalidLoginCases = [
    {
        title: 'POST /api/auth/login - debe rechazar login sin email',
        expectedStatus: 400,
        payload: {
            password: 'Password123',
        },
    },
    {
        title: 'POST /api/auth/login - debe rechazar login sin password',
        expectedStatus: 400,
        payload: {
            email: 'username@gmail.com',
        },
    },
    {
        title: 'POST /api/auth/login - debe rechazar credenciales incorrectas',
        expectedStatus: 401,
        payload: {
            email: 'cirleyn09@gmail.com',
            password: 'PasswordIncorrecto',
        },
    },
];

export const existingUser = {
    email: 'yaquelin2@example.com',
    name: 'Yaquelin Test',
    password: 'Prueba123',
};

export function buildNewUser() {
    const uniqueId = `${Date.now()}-${Math.floor(Math.random() * 1000)}`;

    return {
        email: `yaquelin.${uniqueId}@example.com`,
        name: 'Yaquelin Test',
        password: 'Prueba123',
    };
}
