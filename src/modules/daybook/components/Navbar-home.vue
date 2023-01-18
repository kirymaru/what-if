<template>
  <nav class="navbar bg-primary">
    <a class="navbar-brand text-white">
      <img
        src="@/assets/logo2.png"
        alt="vue logo"
        class="d-inline-block align-text-top mx-2"
        height="26"
      />
      Notas
    </a>
    <div class="d-flex">
      <button @click="about" class="btn btn btn-outline-info">
        Conocenos <i class="fa fa-envelope" aria-hidden="true"></i>
      </button>
      <button @click="regresar" class="btn btn btn-outline-info">
        Volver <i class="fa fa-sign-out-alt"></i>
      </button>
    </div>
  </nav>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations(["clearEntries"]),

    regresar() {
      this.$router.push({ name: "home" });
      this.clearEntries();
    },
    about() {
      this.$router.push({ name: "about" });
      this.clearEntries();
    },
  },
};
</script>
