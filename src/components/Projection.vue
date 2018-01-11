<template>
  <div class="Projection">
    <div class="grid-container">
      <div class="callout success">
        <h5>DB method 'Projection'</h5>
        <p>この操作は射影に関する操作です。</p>
        <p>Select <b v-if="isbn">idbn </b><b v-if="title">title </b><b v-if="author">author </b><b v-if="published_year">published_year </b><b v-if="publisher">publisher </b><b v-if="genre">genre </b> form books.</p>
      </div>
      <div class="grid-x grid-padding-x">
        <fieldset class="fieldset">
          <legend class="white">Check these out</legend>
          <input  type="checkbox"　name="isbn" v-model="isbn"><label>ISBN-Number</label>
          <input　type="checkbox"　name="title" v-model="title"><label>Title</label>
          <input　type="checkbox"　name="author" v-model="author"><label>Author</label>
          <input　type="checkbox"　name="published_year" v-model="published_year"><label>Published Year</label>
          <input　type="checkbox"　name="publisher" v-model="publisher"><label>Publisher</label>
          <input　type="checkbox"　name="genre" v-model="genre"><label>Genre</label>
        </fieldset>
      </div>
      <br>
      <table class="hover">
        <thead>
          <tr>
            <th v-if="isbn">ISBN</th>
            <th v-if="title">Title</th>
            <th v-if="author">Author</th>
            <th v-if="published_year">Published Year</th>
            <th v-if="publisher">Publisher</th>
            <th v-if="genre">Genre</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="book_info in list">
            <td v-if="isbn">{{book_info.isbn}}</td>
            <td v-if="title">{{book_info.title}}</td>
            <td v-if="author">{{book_info.author}}</td>
            <td v-if="published_year">{{book_info.published_year}}</td>
            <td v-if="publisher">{{book_info.publisher}}</td>
            <td v-if="genre">{{book_info.genre}}</td>
          </tr>
        </tbody>
      </table>
      <br>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Projectoin',
  props:['list'],
  data(){
  return {
    isbn:false,
    title:false,
    author:false,
    published_year:false,
    publisher:false,
    genre:false
    }
  },
  methods:{
  },
}
</script>
