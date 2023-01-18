<template>
  <div class="home mt-5 d-flex flex-column align-items-center">
    <img
      width="200"
      class="d-flex p-3"
      alt="Vue logo"
      src="../assets/logo2.png"
    />

    <h1>Cuentanos, que ha pasado hoy?</h1>
    <button
      @click="gotodaybook"
      class="btn btn-primary mx-7 justify-content-center"
    >
      let'sgo <i class="fa fa-sign-in" aria-hidden="true"></i>
    </button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations(["clearEntries"]),
    gotodaybook() {
      this.$router.push({ name: "no-entry" });
      this.clearEntries();
    },
  },
};
</script>
