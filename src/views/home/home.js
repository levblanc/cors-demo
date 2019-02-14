// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Vue from 'vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
  data() {
    return {
      noCors: null,
      jsonp: null,
      getWithCors: null,
      postWithCors: null,
      withProxy: null,
    };
  },
  methods: {
    async noCorsReq() {
      try {
        const res = await Vue.$ajax.get('http://localhost:8000/no-cors');
        this.noCors = res;
      } catch (error) {
        this.noCors = JSON.stringify(error);
      }
    },
    async jsonpReq() {
      const script = document.createElement('script');
      script.src = 'http://localhost:8000/jsonp?callback=foo';

      const funcScript = document.createElement('script');
      const scriptContent = document.createTextNode(
        'window.foo = function (res) {'
          + "console.log('jsonp result: ', res);"
          + "var jsonpTag = document.getElementById('jsonp');"
          + 'jsonpTag.innerHTML = res.data'
        + '};',
      );

      funcScript.appendChild(scriptContent);

      document.getElementsByTagName('head')[0].appendChild(funcScript);
      document.getElementsByTagName('head')[0].appendChild(script);
    },
    async getWithCorsReq() {
      try {
        const { data } = await Vue.$ajax.get('http://localhost:8000/with-cors');
        this.getWithCors = JSON.stringify(data);
      } catch (error) {
        this.getWithCors = error;
      }
    },
    async postWithCorsReq() {
      try {
        const { data } = await Vue.$ajax.post('http://localhost:8000/with-cors', {}, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            // comment token header to see the difference
            token: 'my-simple-token',
          },
        });
        this.postWithCors = JSON.stringify(data);
      } catch (error) {
        this.postWithCors = error;
      }
    },
    async withProxyReq() {
      try {
        const { data } = await Vue.$ajax.get('http://localhost:8001/proxy/with-proxy');
        this.withProxy = JSON.stringify(data);
      } catch (error) {
        this.withProxy = JSON.stringify(error);
      }
    },
  },
};
