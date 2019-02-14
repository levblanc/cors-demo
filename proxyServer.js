const express = require('express');
const httpProxy = require('http-proxy');

const app = express();
const proxy = httpProxy.createProxyServer({});

app.use('/js', express.static('./dist/js/'));
app.use('/css', express.static('./dist/css/'));

app.use('/proxy', (req, res) => {
  proxy.web(req, res, {
    target: 'http://localhost:8000',
  });
});

app.get('/', (req, res) => {
  res.sendFile('/dist/index.html', {
    root: __dirname,
  });
});

app.listen(8001, () => {
  console.log('Proxy Server listening on port 8001');
});
