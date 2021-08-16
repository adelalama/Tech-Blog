//premade examples

const { Post } = require('../models');

const postData = [{
        title: 'Intro to Node JS',
        content: 'Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.',
        user_id: 1

    },
    {
        title: 'Express',
        content: 'Use express to run your applications!',
        user_id: 2
    },
    {
        title: 'React',
        content: 'You should learn some react for web development.',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;