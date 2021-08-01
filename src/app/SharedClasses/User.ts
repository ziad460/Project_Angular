export class UserLogin {
    userName:string = "";
    password:string = "";
    grant_type:string = "password";
}

export class UserRegister
{
    userName:string = "";
    password:string = "";
    confirmPassword:string= "";
    grant_type:string = "password";
}

export class UserToken
{
    access_token:string = "";
    token_type:string = "" ;
    expires_in:number = 0;
}