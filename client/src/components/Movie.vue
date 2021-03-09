<template>
   <b-container class="bv-example-row">
  <div class="row">
    <div v-for="movie in movies" :key="movie.id" >
      <div class="card m-2 col-1.5" style="width: 12rem;">
  <img :src="movie.image_url" class="card-img-top" :alt="movie.title">
  <div class="card-body">
    <h6 class="card-title"><b>{{movie.title}}</b></h6>
    <table class="table table-dark">
  <tbody>
    <tr>
      <td>Rating</td>
      <td>{{movie.rating}}</td>
    </tr>
    <tr>
      <td>Release Year</td>
      <td>{{movie.release_year}}</td>
    </tr>
  </tbody>
</table>
    <button @click="goToDetail(movie.id)"  class="btn btn-primary">Detail</button>
  </div>
</div>
  </div>
  </div>
</b-container>
</template>

<script>
export default {
  name: 'Movie',
  created () {
    this.$store.dispatch('fetchMovies')
  },
  computed: {
    movies () {
      return this.$store.state.movies
    }
  },
  methods: {
    goToDetail (id) {
      this.$store.dispatch('fetchMovieById', id)
    }
  }
}
</script>

<style>
</style>
