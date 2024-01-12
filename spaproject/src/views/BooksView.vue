<!--Aleksandra Kuzeleva 2023
Books page view-->
<template>
  <div>
  <h2>Lägg till en bok</h2>
  <!--AddBook component which adds books to the table below
  event bookAdded is here to reload the page when new books is added-->
  <AddBook @bookAdded="getBooks()"/>
   <h2>Böker</h2>
   <table>
        <tr>
    <th>Titel</th>
    <th>Författare</th>
    <th>År</th>
    <th>Status</th>
    <th></th>
  </tr>
  <!--go through the array books, similarly to for-loop, and create an instance of the BookComp component for each book to be displayed in the table-->
  <BookComp v-for="book in books"
        :key="book.id"
        :book="book"
        @deleteBook="deleteBook(book.id)" /><!--Event handler react when deleteBook is emitted from the component BookComp. 
          In this case the deleteBook method is called and the book.id will be given in order to remove a specific book-->
    </table>
  </div>
</template>

<script>
//import components BookComp and AddBook
import BookComp from "../components/BookComp.vue";
import AddBook from "../components/AddBook.vue";
export default {
    data() {
        return{
          //array books is by default empty 
            books: []
        }
    },
    //imported components which are to be used in the template
    components: {
        BookComp,
        AddBook

    },
    methods: {
      //method which gets book from the database
      async getBooks(){
        //fetch API lib
        const response = await fetch("http://127.0.0.1:8000/api/lib");
        const data = await response.json();//wait for response from the API
        this.books = data;//send data to the books array
      },
      //method to delete a book
      async deleteBook(id){
        //fetch url of the API along with the id of the book which is to be deleted
          const response = await fetch("http://127.0.0.1:8000/api/lib/" + id, {
            method: "DELETE",
            header: {
              "Accept": "application/json",
              "Content-type": "application/json"
            }
          });
          const data = await response.json();
          //call getBooks() method after book is removed to update the table
          this.getBooks();
    }
    },
   
    mounted(){
       this.getBooks();
    }
}
</script>


<style scoped>
table {
  border-collapse: collapse;
  width: 80vw;
  margin-left: 10vw;
}

h2{
  text-align: center;
}

th, td {
  text-align: left;
  padding: 8px;
}

tr:nth-child(even){background-color: #f2f2f2}

th {
  background-color: orange;
  color: black;
}

@media (max-width: 1100px) {
    h2{
      padding-top: 10vh;
    } 
}

@media (max-width: 800px) {
  table{
      font-size: 0.8em;
      width: 90vw;
      margin-left: 2vw;
    }
}


</style>