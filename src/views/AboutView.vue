 
<template>
    
    <nav class="navbar bg-primary"> 
        <a class="navbar-brand text-white">
            <img src="@/assets/logo2.png" 
                alt="vue logo"
                class="d-inline-block align-text-top mx-2"
                height="24">
                Diario
        </a>
        <div class="d-flex">
          
            <button @click="entradas" class="btn btn btn-outline-info">Notas <i class="fa fa-book" aria-hidden="true"></i></button>
            <button @click="regresar"   class="btn btn btn-outline-info">Volver  <i class="fa fa-sign-out-alt"></i></button>
        </div>
    </nav>
        <div  class="d-flex flex-column mx-5 my-5  " >
          <h1 class="  ">Proyecto de año de Vue 3</h1> 
          <h2>Requisitos:</h2>
          <ul class="list-group   ">
              <li class=" list-group-item ">Vuejs 3</li>
              <li class="list-group-item ">Manejo de estados globales</li>
              <li class="list-group-item">rutas dinamicas</li>
              <li class="list-group-item"> Api free backend</li>
              <li class="list-group-item">peticiones</li>
              <li class="list-group-item">CRUD</li>
              <li class="list-group-item">mutacion</li>
              <li class="list-group-item">Repositorio en Github</li>
            </ul>
           

        </div>



</template>



<script>
import { mapMutations } from 'vuex'


export default {
  methods: {

    ...mapMutations(['clearEntries']),

    regresar() {
      this.$router.push({ name: "home" });
      this.clearEntries()
    },
    entradas() {
      this.$router.push({ name: "no-entry" });
      this.clearEntries()
    },
  },
};
</script>
