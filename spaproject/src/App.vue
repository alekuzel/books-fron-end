<!--Aleksandra Kuzeleva 2023-->
<!--The main template of the SPA-->
<template>
  <div>
    <HeaderComp />
    <main>
      <RouterView />
    </main>
    <FooterComp />
  </div>
</template>
<script>
//import components of the apps pages from their locations
import { RouterView } from 'vue-router'
import HeaderComp from "./components/HeaderComp.vue"
import FooterComp from "./components/FooterComp.vue";


//export components to make them available for the SPA
export default {
  components: {
    HeaderComp,
    RouterView,
    FooterComp
  }

}
</script>



