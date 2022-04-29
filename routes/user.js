const express = require('express');

const app = express();

const users = [
  { firstName: 'fnam1', lastName: 'lnam1', userName: 'username1' },
];

// request to get all the users
app.get('/users', (req, res) => {
  res.json(users);
});

// request to get all the users by userName
app.get('/users/:userName', (req, res) => {
  const user = users.filter((user) => {
    if (req.params.userName === user.userName) {
      return user;
    }
  });
  res.json(user);
});

// request to post the user
// req.body has object of type {firstName:"fnam1",lastName:"lnam1",userName:"username1"}
app.post('/user', (req, res) => {
  users.push(req.body);
  res.json(users);
});

module.exports = app;
