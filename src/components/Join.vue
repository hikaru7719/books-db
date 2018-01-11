<template>
<div class="Join">
<div class="grid-container">
<div class="callout success">
  <h5>DB method 'Join'</h5>
  <p>この操作は結合に関する操作です。</p>
  <p v-if="true_or_false">Select * from books <b>inner join authors on books.author = authors.author.</b></p>
</div>
<div class="switch">
  <input class="switch-input" id="Switch" type="checkbox" v-model="true_or_false">
  <label class="switch-paddle" for="Switch">
    <span class="show-for-sr">ON OFF</span>
  </label>
</div>
<h1>Join Table</h1>
<table class="hover" v-if="true_or_false">
  <thead>
    <tr>
      <th>ISBN</th>
      <th>Title</th>
      <th>Author</th>
      <th>Published Year</th>
      <th>Publisher</th>
      <th>Genre</th>
      <th>Author</th>
      <th>Birthday</th>
      <th>Country</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="element in book_and_author">
      <td>{{element.isbn}}</td>
      <td>{{element.title}}</td>
      <td>{{element.author}}</td>
      <td>{{element.published_year}}</td>
      <td>{{element.publisher}}</td>
      <td>{{element.genre}}</td>
      <td>{{element.author2}}</td>
      <td>{{element.birthday}}</td>
      <td>{{element.country}}</td>
    </tr>
  </tbody>
</table>
</div>
</div>
</template>

<script>
export default {
name: 'Join',
props:['list_of_book_and_author'],
data(){
return {
true_or_false:false,
book_and_author:[]
}
},
methods:{
},
watch:{
  true_or_false:function(){
    let list = this.list_of_book_and_author[0];
    let author_list = this.list_of_book_and_author[1];
  if(this.true_or_false){
    for(let num1 in list){
      for(let num2 in author_list){
        let author_of_list = list[num1].author;
        let author_of_author_list = author_list[num2].author;
        if(author_of_list == author_of_author_list){
          let book_and_author_element = {isbn:list[num1].isbn,title:list[num1].title,author:list[num1].author,published_year:list[num1].published_year,publisher:list[num1].publisher,genre:list[num1].genre,author2:author_list[num2].author,birthday:author_list[num2].birthday,country:author_list[num2].country}
          this.book_and_author.push(book_and_author_element);
        }
      }
    }
  }else{
  this.book_and_author=[]
  }
}
}
}
</script>
