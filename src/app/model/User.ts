export default class User {
    _id: string;
    email: string;
    // not sure if we need this one
    password: string;

    constructor(id, email, pass){
        this._id = id;
        this.email = email;
        this.password = pass;
    }
}