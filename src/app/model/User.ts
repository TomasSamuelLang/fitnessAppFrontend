export default class User {
    id: string;
    email: string;
    // not sure if we need this one
    password: string;

    constructor(id, email, pass){
        this.id = id;
        this.email = email;
        this.password = pass;
    }
}