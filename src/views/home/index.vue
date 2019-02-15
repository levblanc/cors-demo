<template>
  <div class="home">
    <button @click='noCorsReq'>No CORS</button>
    <div>No CORS Result: {{ noCors }}</div>
    <br />
    <button @click='jsonpReq'>Use JsonP</button>
    <div>
      JsonP result:
      <span id='jsonp'></span>
    </div>
    <br />
    <button @click='getWithCorsReq'>GET With CORS</button>
    <div>GET With CORS Result: {{ getWithCors }}</div>
    <br />
    <button @click='postWithCorsReq'>POST With CORS</button>
    <div>POST With CORS Result: {{ postWithCors }}</div>
    <br />
    <button @click='withProxyReq'>With PROXY</button>
    <div>With Proxy Result: {{ withProxy }}</div>
    <hr>
    <button @click='login'>Login</button>
    <div>Login: {{ isLogin }}</div>
  </div>
</template>

<script src='./home.js' lang='babel'></script>
