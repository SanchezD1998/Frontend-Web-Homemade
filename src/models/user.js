// user.js
// User Class

export default class User {
    constructor(id, name, lastName, password, email, picture) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.picture = picture;
    }
}
