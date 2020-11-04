export default class Exercise {
    id: string;
    name: string;
    description: string;

    constructor(name, description) {
        this.name = name;
        this.description = description;
    }
}