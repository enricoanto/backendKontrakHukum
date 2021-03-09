<template>
<div>
       <b-container class="bv-example-row">
  <div class="row">
    <div>
      <div class="card m-2" style="width: 15rem;">
  <img :src="movie.image_url" class="card-img-top" :alt="movie.title">
  <div class="card-body">
    <h6 class="card-title"><b>{{movie.title}}</b></h6>
      <p>{{movie.description}}</p>
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
    <tr>
      <td>Tickets</td>
      <td>{{movie.tickets}}</td>
    </tr>
  </tbody>
</table>
<b-button @click="openForm()" variant="primary" class="mt-4">Tambah Item</b-button>
    <b-modal v-model="form" hide-footer title="Tambah Item"><Form @close="close" :movieId="movie.id"></Form></b-modal>
  </div>
</div>
  </div>
  <div class="m-3">
    <div class="row">
     <div v-for="cast in movie.Actors" :key="cast.id">
        <div class="card col-12" style="width: 18rem;">
  <img src="z" class="card-img-top" :alt="movie.name">
  <div class="card-body">
    <h5 class="card-title">{{cast.name}}</h5>

  </div>
</div>
       </div>
      </div>
  </div>
  </div>
</b-container>
</div>
</template>

<script>
import Form from '../views/Form'
export default {
  name: 'Movie',
  components: {
    Form
  },
  data () {
    return {
      form: false
    }
  },
  methods: {
    openForm (id) {
      this.$emit('inForm', id)
      this.form = true
    },
    close () {
      this.form = false
    }
  },
  created () {
    this.$store.dispatch('fetchMovieById')
  },
  computed: {
    movie () {
      return this.$store.state.movie
    }
  }
}
</script>

<style>
</style>
