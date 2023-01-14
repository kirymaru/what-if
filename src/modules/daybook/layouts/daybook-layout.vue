<!-- eslint-disable prettier/prettier -->
 <template>
    <Navbar />

    <div class="d-flex">
        <div class="col-4">
            <EntryList/>
        </div>
    
        <div class="col">
            <router-view/>
        </div>
    </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>

import { defineAsyncComponent } from "vue"
export default {
  components: {
    Navbar: defineAsyncComponent(() => import("../components/Navbar-home.vue")),
    EntryList: defineAsyncComponent(() => import("../components/Entry-view.vue"))
  }
}

</script>
