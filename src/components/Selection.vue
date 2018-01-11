<template>
  <div class="Selection">
    <div class="grid-container">
      <div class="callout success">
        <h5>DB method 'Selection'</h5>
        <p>この操作は選択に関する操作です。</p>
        <p>Select * form books where <b v-if="search.isbn !=''">idbn = '{{search.isbn}}' and</b>　<b v-if="search.author !=''">author = '{{search.author}}' and</b> <b v-if="search.genre !=''">genre = '{{search.genre}}'</b>.</p>
      </div>
      <div class="grid-x grid-padding-x">
          <div class="medium-2 cell">
            <label>ISBN-Number
              <input type="text" name="isbn" v-model="search.isbn">
            </label>
          </div>
          <div class="medium-2 cell">
            <label>Author
              <input type="text" name="author" v-model="search.author">
            </label>
          </div>
          <div class="medium-2 cell">
            <label>Genere
              <input type="text" name="genre" v-model="search.genre">
            </label>
          </div>
      </div>
      <br>
      <table class="hover">
        <thead>
          <tr>
            <th>ISBN</th>
            <th>Title</th>
            <th>Author</th>
            <th>Published Year</th>
            <th>Publisher</th>
            <th>Genre</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="book_info in book">
            <td>{{book_info.isbn}}</td>
            <td>{{book_info.title}}</td>
            <td>{{book_info.author}}</td>
            <td>{{book_info.published_year}}</td>
            <td>{{book_info.publisher}}</td>
            <td>{{book_info.genre}}</td>
          </tr>
        </tbody>
      </table>
      <br>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Selection',
  props:['list'],
  data(){
  return {
    search:{
      isbn:'',
      author:'',
      genre:'',
    },
    book:[],
    }
  },
  methods:{
  },
  watch: {
    search:{　
      handler:function(val){
      console.log(val);
      let books = [];
      let isbn = this.search.isbn;
      let author = this.search.author;
      let genre = this.search.genre;
      let list_for_book = [];
      for (let num in this.list){
        list_for_book.push(this.list[num]);
      }
      console.log(list_for_book)
      while(list_for_book.length){
        let book = list_for_book.shift();
        if(isbn && author && genre){
          console.log(1);
          if(book.isbn === isbn && book.author === author && book.genre === genre){
            books.push(book);
          }
        }else if (isbn && author) {
          if(book.isbn === isbn && book.author === author){
            books.push(book);
          }
        }else if (isbn && genre) {
          if(book.isbn === isbn && book.genre === genre){
            books.push(book);
          }
        }
        else if (genre && author) {
          if(book.genre === genre && book.author === author){
            books.push(book);
          }
        }else if (isbn) {
          console.log('isbn');
          if(book.isbn === isbn){
            books.push(book);
          }
        }else if (author) {
          if(book.author === author){
            books.push(book);
          }
        }else if (genre) {
          if(book.genre === genre){
            books.push(book);
          }
        }
      }
      this.book = books;
    },
    deep: true
  }
  }
}
</script>
