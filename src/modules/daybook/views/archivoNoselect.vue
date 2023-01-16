<template>
    <div class="d-flex  justify-content-center">
        <h1 class="d-flex align-items-center  ">No hay nada selecionado</h1>
    </div>
   <Fab
        @on:click="createNewEntry"
   />
</template>

<script>
import { defineAsyncComponent, defineComponent} from 'vue'

export default {
    components: {
        Fab: defineAsyncComponent( () => import('../components/Fab-b.vue'))
    },
    methods:{
        createNewEntry(){
            this.$router.push({name:'entry',params:{id: 'new'}})
        }    
    },
}
</script>

 
<style lang="scss" scoped>
    div{
        height:100% ;
    }
</style>