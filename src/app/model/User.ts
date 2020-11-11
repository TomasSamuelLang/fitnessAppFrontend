export default class User {
    _id: string;
    email: string;

    constructor(id: string, email: string) {
        this._id = id;
        this.email = email;
    }
}
