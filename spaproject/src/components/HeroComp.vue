<!--Aleksandra Kuzeleva 2023

components for the image and text on the start page-->
<template>
  
<div class="hero-image">
    <div class="hero-text">
      <h2 style="font-size:2em">Att läsa böker</h2>
      <p>Att läsa för mig är ett sätt att koppla av, minska stress, åka på en metallresa var som helst och när som helst.</p>

<p>Under ganska lång tid föredrog jag bara pappersböcker. Jag tycker fortfarande om doften och känslan av papper, men nu är de flesta böcker jag läser e-böcker. Dels för att det är ett mer naturvänligt sätt att läsa och dels för att det helt enkelt finns plats i min lägenhet för hundratals böcker.</p>

<p>Numera tittar jag på hur min dotter, som nu är fem, lär sig läsa.</p>
      
    </div>
  </div>
</template>

<script>
   import { RouterLink } from 'vue-router'
   export default {
    components: {
       RouterLink,
    }
   }
</script> 
<style scoped>
.hero-image {

  background-image: url("../assets/library.jpg");
  height: 100vh;
  
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.hero-text {
  text-align: center;
  position: absolute;
  background-color: rgb(27, 27, 27);
  top: 35vh;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}

@media (max-width: 1100px) {
  .hero-text{
    top: 35vh;
    width: 70vw;
    padding-left: 2vw;
    padding-left: 2vh;
  }
}

@media (max-width: 600px) {
  .hero-text{
    top: 45vh;
    width: 80vw;
    padding-left: 2vw;
    padding-left: 2vh;
  }
  p{
    font-size: 1.9vh;
    padding-left: 2vh;
    padding-right: 2vh;
  }
  }
</style>