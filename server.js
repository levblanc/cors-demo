const express = require('express');

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
  res.header(
    'Access-Control-Allow-Headers',
    'Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-TOKEN, Authorization, token',
  );
  res.header(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE',
  );

  if (req.method === 'OPTIONS') {
    res.status(200).json({});
    next();
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

app.listen(8000, () => {
  console.log('Listening on port 8000');
});
