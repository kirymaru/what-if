 
 <template>
    <Navbar />

    <div 
      class="d-flex">
        <div class="col-4">
            <EntryList/>
        </div>
    
        <div class="col">
            <router-view/>
        </div>
    </div>
</template>
 
<script>

    import { defineAsyncComponent } from "vue"
    import { mapActions, mapState } from 'vuex'

    export default {
          components: {
            Navbar: defineAsyncComponent(() => import("../components/Navbar-home.vue")),
            EntryList: defineAsyncComponent(() => import("../components/Entry-view.vue"))
          },

          methods:{
                ...mapActions(['loadEntries'])
          },

          computed: {
              ...mapState(['isLoading'])
          },

          created() {
                this.loadEntries()
            },

    }

</script>
