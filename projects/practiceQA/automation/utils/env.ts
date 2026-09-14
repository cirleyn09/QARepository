function getEnvVariable(name: string): string {
    const value = process.env[name];

    if (!value) {
        throw new Error(`La variable de ambiente ${name} no está definida`);
    }

    return value;
}

export const practiceQAEnv = {
    email: getEnvVariable('PRACTICE_QA_EMAIL'),
    password: getEnvVariable('PRACTICE_QA_PASSWORD')
};