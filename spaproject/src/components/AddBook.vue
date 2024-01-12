<template>
  <!--on submitting the form the addBook method will be called-->
    <form @submit.prevent="addBook()">
      <label for="title">Bokens titel</label><br>
       <!--v-model is used in all imnput fiels, except the submit-->
      <input v-model="title" type="text" id="title"><br>
      <br>
      <label for="author">Författare</label><br>
      <input v-model="author" type="text" id="author"><br>
      <br>
      <label for="year">Publiceringsår</label><br>
      <input v-model="year" type="text" id="year"><br>
      <br>
       <!--for the status of the books - read or unread (whis is saved as boolean)= I use the radio buttons
      the Read radio button, when chosen, will give the value true, the NotRead - false.=-->
      <label for="read">Status</label><br><br>
      <input type="radio" id="read" name="haveread" v-model="haveread" :value="true">
      
      <label for="read">Läst</label><br><br>
      <input type="radio" id="notRead" name="haveread" v-model="haveread" :value="false">
      <label for="notRead">Oläst</label><br>
  
      <br>
      <input type="submit" value="Spara">
    </form>
  </template>
  
  <script>
  export default {
    //data properties
    data() {
      return {
        title: "",
        author: "",
        year: "",
        //initial value of haveread is null
        haveread: null, 
      };
    },
    methods: {
        async addBook() {
          //create object bookInfo with all the data about a book
          let bookInfo = {
          title: this.title,
          author: this.author,
          year: this.year,
          //haveread, based on the users choice, is true or false, that is, boolean
          haveread: this.haveread,
        };
   
    //specify the URL of the API where the POST request will be sent
    const response = await fetch("http://127.0.0.1:8000/api/lib", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify(bookInfo),
    });
    
    //parse the recieved response
    const data = await response.json();
    
   //clear the form after submitting
    this.title = "";
    this.author = "";
    this.year = "";
    this.haveread = null;
  
    //emit will take effect in the AddBook component in BooksView - it will activate the getBooks() method
    //to show the table with a newly added book
    this.$emit("bookAdded");
 
   }
  }
  
};
  </script>
  
  <style scoped>
  form {
    max-width: 70vh;
    margin-left: 10vw;
  }
  
  input[type="text"] {
    max-width: 65wv;
    height: 4vh;
    background-color: antiquewhite;
    border-style: none;
  }
  
  input[type="submit"] {
    background-color: rgb(41, 112, 135);
    border-style: none;
    border-radius: 7px;
    padding-left: 1.4vh;
    padding-right: 1.4vh;
    padding-top: 1vh;
    padding-bottom: 1vh;
    color: white;
    font-size: 1.05em;
  }
  input[type="submit"]:hover{
    background-color: rgb(24, 65, 77);
    color: orange;
  }

  
  </style>
  