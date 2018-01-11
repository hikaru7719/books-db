<template>
    <div class="grid-container">
      <div class="grid-x grid-padding-x">
          <div class="medium-2 cell">
            <label>ISBN-Number
              <input type="text" name="isbn" v-model="isbn">
            </label>
          </div>
          <div class="medium-2 cell">
            <label>Title
              <input type="text" name="title" v-model="title">
            </label>
          </div>
          <div class="medium-2 cell">
            <label>Author
              <input type="text" name="author" v-model="author">
            </label>
          </div>
          <div class="medium-2 cell">
            <label>Published Year
              <input type="text" name="published_year" v-model="published_year">
            </label>
          </div>
          <div class="medium-2 cell">
            <label>Publisher
              <input type="text" name="publisher" v-model="publisher">
            </label>
          </div>
          <div class="medium-2 cell">
            <label>Genre
              <input type="text"name="genre" v-model="genre">
            </label>
          </div>
          <div class="medium-offset-5">
          </div>
          <div class="medium-2 cell">
            <input class="button success" type="submit" value="add Book" v-on:click="addBook">
          </div>
      </div>
      <br>
    </div>
</template>

<script>
export default {
  name: 'AddBook',
  data(){
  return {
    isbn:'',
    title:'',
    author:'',
    published_year:'',
    publisher:'',
    genre:''
    }
  },
  methods:{
    addBook: function(){
        let isbn = this.isbn;
        let title = this.title;
        let author = this.author;
        let published_year = this.published_year;
        let publisher = this.publisher;
        let genre = this.genre;
        if(isbn && title && author && published_year && publisher && genre){
        this.isbn = '';
        this.title = '';
        this.author = '';
        this.published_year = '';
        this.publisher = '';
        this.genre = '';
        let new_book = {isbn:isbn,title:title,author:author,published_year:published_year,publisher:publisher,genre:genre};
        this.$emit('add-book',new_book);
      }
    }
  },
}
</script>
