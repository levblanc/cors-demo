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

in order for the `With PROXY` button and the CSRF test to work properly, 

you will need to run the `npm run build` command first,

then load the app on `http://localhost:8001`

For the CSRF test:

1. login in `http://localhost:8080`, cookie will be set to the browser
2. go to `http://localhost:8001` and click the `CSRF` link
3. refresh home page of `8080`, login status should change

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
