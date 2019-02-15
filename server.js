const express = require('express');
const cookieParser = require('cookie-parser')

const app = express();

app.get('/no-cors', (req, res) => {
  res.status(400).json({
    status: 'error',
    message: "you shouldn't see this message.",
  });
});

app.get('/jsonp', (req, res) => {
  if (!req.query || req.query.callback !== 'foo') {
    res.status(400)
    return
  }

  res.status(200).send(req.query.callback + '(' + JSON.stringify({
    data: 'You get the idea of JsonP! Congrates!'
  }) + ')');
});

app.get('/with-proxy', (req, res) => {
  res.status(200).json({
    status: 'success',
    data: 'YAY! You understand the PROXY method now!',
  });
});

app.use((req, res, next) => {
  const origin = req.get('origin');

  res.header('Access-Control-Allow-Origin', origin);
  // csrf attack:
  // using origin whitelist may be of some help
  // when attackers are using ajax attack
  // res.header('Access-Control-Allow-Origin', 'http://localhost:8000');
  res.header(
    'Access-Control-Allow-Headers',
    'Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-TOKEN, Authorization, token',
  );
  res.header(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE',
  );
  res.header('Access-Control-Allow-Credentials', true)

  if (req.method === 'OPTIONS') {
    return res.status(200).json({});
    next();
  }

  next();
});

app.use(cookieParser());

const cookieName = 'csrf-test'
const cookieValue = 'my little cookie'

app.use((req, res, next) => {
  if (!req.cookies[cookieName]) {
    res.cookie(cookieName, cookieValue, {
      domain: 'localhost'
    });
    req.cookies[cookieName] = cookieValue
  } else {
    console.log('cookie exist');
  }

  next();
});


app.get('/with-cors', (req, res) => {
  res.status(200).json({
    status: 'success',
    data: 'cors enabled GET! Welcome!',
  });
});

app.post('/with-cors', (req, res) => {
  res.status(200).json({
    status: 'success',
    data: 'cors enabled POST! Welcome!',
  });
});

app.post('/login', (req, res) => {
  res.status(200).json({
    status: 'success',
    isLogin: true,
  });
});

app.post('/logout', (req, res) => {
  if (req.cookies[cookieName]) {
    res.clearCookie(cookieName);

    res.status(200).json({
      status: 'success',
      isLogin: false,
    });

    return
  }

  res.status(401).json({
    status: 'error',
    message: 'Not Authorized!',
  });
});

app.listen(8000, () => {
  console.log('Listening on port 8000');
});
