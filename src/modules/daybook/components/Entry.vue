<template>
  <div
    class=" entry-container mb-3 pointer p-2"
    @click="$router.push({name:'entry', params:{id:10}})"
    >
     
    <!-- titulo -->
      <div
        class="entry-title d-flex">
          <span class="text-succes fs-5 fw-bold">15</span>
          <span class="mx-1 fs-5">julio</span>
          <span class="mx-2 fw-ligth">2023, viernes</span>
      </div>

    <div class="entry-description">
      Aliqua irure quis do commodo. Occaecat nulla ipsum aliquip in officia pariatur. In incididunt incididunt id esse officia pariatur esse cupidatat reprehenderit mollit. Ad sint occaecat incididunt deserunt ad mollit nulla sunt. Ipsum labore consequat veniam magna est aliqua consectetur commodo commodo pariatur occaecat in sunt nostrud. Proident ex culpa veniam excepteur est exercitation ex. Est ut aliqua nisi eu fugiat Lorem et.
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.entry-container{
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s all ease-in;

  &:hover{
  background-color: lighten($color: rgb(78, 78, 78), $amount: 45);
  transition: 0.2s all ease-in;
    }
    .entry-description{
      font-size: 12px;
    }
}
</style>