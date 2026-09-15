export function getEnvVariable(name: string): string {
    const value = process.env[name];

    if (!value) {
        throw new Error(`La variable de ambiente ${name} no está definida`);
    }

    return value;
}

export const practiceQAEnv = {
    get email() {
        return getEnvVariable('PRACTICE_QA_EMAIL');
    },
    get password() {
        return getEnvVariable('PRACTICE_QA_PASSWORD');
    }
};
