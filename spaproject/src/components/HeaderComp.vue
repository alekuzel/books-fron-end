<!--Aleksandra Kuzeleva 2023 

The header component template-->

<template>
  <header>
    <head>
      <!--link to font awsome stylesheet which is used for creating drop dowm menu for smaller screens-->
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      </head>
      
    <div class="headerDiv">

     <h1 class="mainTitle">Moment&nbsp;3.&nbsp;Vue.js</h1><!--&nbsp; forces whole header to always stay on line-->

          <!--for smaller screens. when the hamburger icon is clicked, the dropDown function is called-->
          <span class="hamburger" @click="dropDown">

        <!--is openMenu false, that is, not clicked, the fa fa-bars icon is shown
        when the hamburger menu icon is clicked, the fa fa-times (closing icon) is shown instead-->
          <i :class="{'fa fa-bars': !openMenu, 'fa fa-times': openMenu}"></i></span>
      <!--use class open when the menu is open-->
          <nav :class="{ 'open': openMenu }"><ul>

              <!--when link in the open menu is clicked, the user is redirected to the chosen page and closeMenu function is called
              without is menu remains opened on a new page-->
              <li><RouterLink @click="closeMenu" to="/">Startsida</RouterLink></li>
              <li><RouterLink @click="closeMenu" to="/books">Books</RouterLink></li>
              <li><RouterLink @click="closeMenu" to="/about">Info</RouterLink></li>

         </ul></nav>
  </div>
  </header>

</template>

<script>

//import RouterLink
import { RouterLink } from 'vue-router';

//export compoments
export default {
  components: {
    RouterLink,
  },
  data() {
    return {
      //menu on smaller screens is initially closed, so the openMenu is false by default
      openMenu: false,
    };
  },
  methods: {
    //each time the dopDown method is called it changes state of openMenu
    //as its value can be only true or false, it changes between these two and menu opens or closes respectively
    dropDown() {
      this.openMenu =! this.openMenu;
    },
    //make openMenu equal to false in order to close the drop down menu
    closeMenu() {
      this.openMenu = false;
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
}

header {
  background-color: black;
  height: 10vh;
}

.headerDiv {
  display: flex;
  align-items: center;
}

.mainTitle {
  flex: 1;
  padding-left: 2vw;
  color: orange;
}

a {
  text-decoration: none;
  color: white;
}

ul {
  list-style: none;
  margin-left: 40vw;
  margin-top: 2vh;
}

ul li {
  display: inline-block;
  padding-right: 5vw;
  margin-bottom: 2vh;
  font-size: 3vh;
}

.hamburger {
  display: none;
  font-size: 2em;
  cursor: pointer;
}


@media (max-width: 1100px) {
  nav {
    display: none;
    flex-direction: column;
    height: 40vh;
    z-index: 2;
    background-color: black;
  }

  ul li{
    padding-right: 60vw;
    padding-top: 3vh;
  }

  /*this style is applied to nav-element when menu is open*/
nav.open {
  display: flex;
  flex-direction: column;
  align-items: center;
}

  .hamburger {
    display: block;
    color: orange;
    position: fixed;
    top: 10px;
    z-index: 3;
    left: 10px;
  }

  .mainTitle{
    margin-left: 55vw;
    margin-top: 11vh;
    font-size: 4vh;
    z-index: 1;
    position: fixed;
    overflow:hidden;

  }

  header{
    position: fixed;
    z-index: 1;
    background-color: black;
    margin-top: -3vh;
    height: 10vh;
    width: 100vw;
  }

  @media (max-width: 600px) {
    .mainTitle{
    margin-left: 35vw;
    margin-top: 11vh;
    font-size: 3vh;
    z-index: 1;
    position: fixed;
    overflow:hidden;

  }
  }
  
}
</style>
