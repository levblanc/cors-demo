# cors-demo

## Project setup
```
npm install
```

### Compiles and hot-reloads for development

dev server listens on port 8080

```
npm run serve
```

### Run backend server

backend server listens on port 8000

```
nodemon server.js
```

### Run proxy server (you need to `build` first)

proxy server listens on port 8001

in order for the `With PROXY` button to work properly, 

you will need to run the `npm run build` command first,

then load the app on `http://localhost:8001`

```
nodemon proxyServer.js
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
