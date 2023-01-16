<template>
  <div v-if="entry"
     class="entry-title d-flex justify-content-between p-2">
    <div>
      <span class="text-succes fs-3 fw-bold"> {{day}}  </span>
      <span class="mx-1 fs-3 "> {{month}} </span>
      <span class="mx-2 fw-ligth"> {{yearDay}} </span>
    </div>

    <div>
      <button class="btn btn-danger mx-2">
          Borrar
          <i class="fa fa-trash-alt"></i>
      </button>

      <button class="btn btn-primary ">
          Subir foto
          <i class="fa fa-upload"></i>
      </button>
    </div>
  
  </div>
   

   <hr>
      <div class=" d-flex flex-column px-3 h-75">
          <textarea
            v-model="entry.text"
           placeholder="¿Qué hay de nuevo?">
          </textarea>
      </div>


  <Fab
      icon='fa-save'
  />

  <img src="https://www.infobae.com/new-resizer/k-Qmsa8nLfFCfmVxTVjAFAMESws=/992x606/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/LXP67FGCI5CFJOEIUWDXE6NE3M.jpg" 
      alt="entry-image"
      class="img-thumbnail">
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapGetters  } from 'vuex'

import   getDayYearsMonth from '../helpers/getDayYearMonth'

export default {

        props:{
      id:{
        type:String,
        required:true
      }
        },
      components: {
        Fab:defineAsyncComponent(()=>import('../components/Fab-b.vue'))
      }, 
      data(){
          return{
            entry: {
              text:''
            }
          }
      },

      computed:{
        ...mapGetters(['getEntriesById']),
        day(){
            const{day }=getDayYearsMonth(this.entry.date)
                return day

        },
        month(){
           const{month}=getDayYearsMonth(this.entry.date)
                return  month

        },
        yearDay(){
           const{yearDay }=getDayYearsMonth(this.entry.date)
                return yearDay

        }

      },

      methods: {


      loadEntry(){
      const entry =this.getEntriesById(this.id)
          if (!entry) return this.$router.push({name: 'no-entry'})
          this.entry= entry 

          }
          },

      created() {
        this.loadEntry()
      },


      watch:  {
        id() {

          this.loadEntry()
        }


      }


}
</script>

<style lang='scss' scoped>
      textarea {
        font-size: 20px;
        border: none;
        height: 100%;
        

        &:focus{
          outline: none;
        }
      }

      img{
        width: 200px;
        position: fixed;
        bottom:100px ;
        right: 20px;
        box-shadow:0px 5px 10px rgba($color: #000000, $alpha: 0.2) ;


}
</style>