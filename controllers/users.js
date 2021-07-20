/* Users controllers */

const User = require('../models/Users');

const user1 = new User(1, "DiegoGal04", "Diego", "Galindo", "diegogal2002@gmail.com");
const user2 = new User(2, "johndoe", "John", "Doe", "johndoe@gmail.com");

let userDatabase = [user1, user2];


function getUsers(request, response) {
    return response.send(userDatabase);
};

function creatUser(request, response) {
    const id = userDatabase.length + 1;
    const newUser = new User(
        id, 
        request.body.userNmae,
        request.body.name, 
        request.body.lastName, 
        request.body.email
    );
    userDatabase.push(newUser);
    return response.status(201).send(newUser);
};

module.exports = {
    getUsers,
    creatUser
};