<template>
  <div class="home">
    <form
    class="bg-dark mx-auto text-primary py-5 px-3 col-3"
    @submit.prevent="setName"
  >
    <div class="form-group">
      <label for="email">Name</label>
      <input
        type="name"
        class="form-control"
        id="name"
        v-model="name"
      />
    </div>
    <button type="submit" class="btn btn-primary">register</button>
  </form>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  data () {
    return {
      name: ''
    }
  },
  methods: {
    setName () {
      this.$store.dispatch('register', this.name)
        .then(data => {
          this.$router.push({ path: '/movie' })
        })
    }
  }
}
</script>
