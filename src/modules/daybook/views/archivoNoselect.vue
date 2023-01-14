<template>
    <div class="d-flex  justify-content-center">
        <h1 class="d-flex align-items-center  ">No hay nada selecionado</h1>
    </div>
   <Fab/>
</template>

<script>
import { defineAsyncComponent, defineComponent} from 'vue'

export default {
    components: {
        Fab: defineAsyncComponent( () => import('../components/Fab-b.vue'))
    }
}
</script>

 
<style lang="scss" scoped>
    div{
        height:100% ;
    }
</style>