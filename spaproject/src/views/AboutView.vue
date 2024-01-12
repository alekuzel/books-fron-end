<!--Aleksandra Kuzeleva 2023
About page view-->
<template>
    
    <article>
        <h2>Om Vue.js</h2>

        <p>Installationen av Vue.js gick bra, med bara några problem som hände när jag av misstag försökte göra något i en fel katalog.</p>


<p>Skapandet av SPA gick också ganska smidigt, trodde inte utan några svårigheter i början. Först verkade det vara för många mappar och filer att ha koll på. Efter några dagars övning började jag dock njuta av att projektet är uppdelat i mindre delar vilket gör det lätt att läsa och förstå koden och att felsöka.</p>
<p> Jag älskade särskilt komponentspecifik CSS. Vanligtvis slutar jag med mycket lång CSS-kod där jag bara kan navigera med Ctrl+F. Med komponentspecifikt är det dock så mycket enklare att hantera applikationens stil.</p>
    </article>
 </template>

 <style scoped>
 article{
    padding-top: 10vh;
    padding-left: 5vw;
    padding-right: 5vw;
    width: 65vw;
    padding-bottom: 20vh;
 }

 article h2{
    background-color: orange;
    padding-top: 0.5vh;
    padding-bottom: 0.5vh;
 }

 @media (max-width: 600px) {
  article{
   width: 80vw;
  }
  }
</style>