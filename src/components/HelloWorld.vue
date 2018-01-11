<template>
  <div class="hello">
    <h1>Books DB</h1>
    <db-menu/>
    <router-view v-bind:list="list" v-bind:list_of_book_and_author="list_of_book_and_author" v-on:add-book="addList"></router-view>
    <div class="grid-container">
    <h1>Books Table</h1>
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
        <tr v-for="book_info in list">
          <td>{{book_info.isbn}}</td>
          <td>{{book_info.title}}</td>
          <td>{{book_info.author}}</td>
          <td>{{book_info.published_year}}</td>
          <td>{{book_info.publisher}}</td>
          <td>{{book_info.genre}}</td>
        </tr>
      </tbody>
    </table>

    <h1>Author Table</h1>
    <table class="hover">
      <thead>
        <tr>
          <th>Author</th>
          <th>Birthday</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="author_info in author_list">
          <td>{{author_info.author}}</td>
          <td>{{author_info.birthday}}</td>
          <td>{{author_info.country}}</td>
        </tr>
      </tbody>
    </table>
    </div>
  </div>
</template>

<script>
const list=[
  {isbn: '4087520099',title:'こころ',author:"夏目漱石",published_year:'1991/2/25',publisher:'集英社',genre:'小説'},
  {isbn: '410101003X',title:'坊ちゃん',author:"夏目漱石",published_year:'2003/04',publisher:'新潮社',genre:'小説'},
  {isbn: '4087520471',title:'我輩は猫である',author:"夏目漱石",published_year:'1995/6/20',publisher:'集英社',genre:'小説'},
  {isbn: '4101010099',title:'草枕',author:"夏目漱石",published_year:'2005/09',publisher:'新潮社',genre:'小説'},
  {isbn: '4101010048',title:'三四郎',author:"夏目漱石",published_year:'1948/10/27',publisher:'新潮社',genre:'小説'},
];
const author_list = [
  {author:'夏目漱石',birthday:'1867/2/9',country:'日本/東京'}
];
const book_and_author= [];
book_and_author.push(list);
book_and_author.push(author_list);
import menu from '@/components/menu'

export default {
  name: 'HelloWorld',
  data (){
  return {
      list: list,
      author_list: author_list,
      list_of_book_and_author:book_and_author,
    }
  },
  methods:{
    addList: function(book){
      this.list.push(book);
    }
  },
  components:{
    'db-menu':menu
  }
}
</script>
