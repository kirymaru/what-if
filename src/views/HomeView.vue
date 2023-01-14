<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable prettier/prettier -->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />

    <h1>ajia</h1>
    <button @click="gotodaybook" class="btn btn-primary">sadan</button>
  </div>
</template>

<script>
export default {
  methods: {
    gotodaybook() {
      this.$router.push({ name: "no-entry" });
    },
  },
};
</script>
