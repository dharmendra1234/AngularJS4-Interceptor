export class Token {

    refreshToken:string;
    token:string;
    constructor(refreshToken: string,token: string) {
        this.refreshToken=refreshToken;
        this.token=token;
    }

}
