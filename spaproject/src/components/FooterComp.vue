<!--Aleksandra Kuzeleva 2023
   footer component-->
<template>
    <footer>
        <p>Aleksandra Kuzeleva. 2023</p>
        <p><a href="https://www.freepik.com/free-photo/modern-bookstore-showcasing-rows-vibrant-books_84718526.htm#query=library&position=0&from_view=search&track=sph&uuid=848c18d7-f0d0-4aa4-aff6-f860344a7864">Image by maniacvector</a> on Freepik</p>
    </footer>
</template>


<script>
   import { RouterLink } from 'vue-router'
   export default {
    components: {
       RouterLink
    }
   }
</script>

<style>
 footer{
    background-color: black;
    color: orange;
    height: 15vh;
    margin-top: 20vh;

  }

  footer p {
    padding-left: 5vw;
    padding-top: 2vh;
  }
  </style>