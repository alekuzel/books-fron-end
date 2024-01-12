<template>
     <tr>
      <!--books title, author and yead are displayed after they are received from the database-->
    <td>{{book.title}}</td>
    <td>{{book.author}}</td>
    <td>{{book.year}}</td>
    <td>
      <!--here conditional rendering is used. if the book.haveread is true, the span with text "Läst" will be rendered. Otherwise (else)
      application is rendering the span whith "Oläst" text-->
  <span v-if="book.haveread">Läst</span>
  <span v-else>Oläst</span>
</td>
<!--delete buttons. when button is clicked, the event is emitted to the parent component (BookView) with the information that someone want to 
delete a book with certain ID-->
<td> <button @click="onDeleteBook">Radera</button></td>
  </tr>
</template>

<script>
export default{
  //prop here is the object book
   props: {
       book: Object
   },
  methods: {
    //event is emitted when the Radera-button is clicked
    onDeleteBook() {
      this.$emit("deleteBook");
    }
}
}
</script>

<style scoped>
button{
  background-color: rgb(114, 63, 63);
  color: rgb(255, 255, 255);
  padding: 1vh;
  border-radius: 5px;
  border-style: none;
  font-size: 1em;
}

button:hover{
  background-color: rgb(61, 29, 29);
}


</style>