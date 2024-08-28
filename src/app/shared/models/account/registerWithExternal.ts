export class RegisterWithExternal {
    firstName: string;
    userId: string;
    accessToken: string;
    provider: string;

    constructor(firstName: string, userId: string, accesToken: string, provider: string) {
        this.firstName = firstName;
        this.userId = userId;
        this.accessToken = accesToken;
        this.provider = provider;
    }
}