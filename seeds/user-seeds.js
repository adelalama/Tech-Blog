//premade user data
const { User } = require('../models');

const userData = [{
        username: 'Alex',
        password: 'pwd',
        id: 1

    },
    {
        username: 'Rob',
        password: 'pwd'
    },
    {
        username: 'Richard',
        password: 'pwd'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;