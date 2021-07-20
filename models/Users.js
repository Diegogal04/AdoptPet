/* User model definition */

class User {
    constructor(
        id,
        userName,
        name,
        lastName,
        email
    ) {
        this.id = id;
        this.userName = userName;
        this.name = name;
        this.lastName = lastName;
        this.email = email;
    }
};


module.exports = User;