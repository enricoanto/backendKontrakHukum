<template>
  <form>
  <div class="text-form">
    <label class="form-label">tickets</label>
    <input type="number" v-model="tickets" class="form-control" id="tickets">
  </div>
  <div class="mx-3">
  <button type="cancel" class="btn btn-secondary m-2 text-end" @click.prevent="closeForm">cancel</button>
  <button type="submit" class="btn btn-primary m-2 text-end" @click.prevent="addForm">buy</button>
  </div>
</form>
</template>

<script>
export default {
  name: 'Form',
  props: ['movieId'],
  data () {
    return {
      tickets: 0
    }
  },
  methods: {
    addForm () {
      const obj = {
        movieId: this.movieId,
        tickets: this.tickets
      }
      this.$store.dispatch('buyTickets', obj)
      this.$emit('close', false)
    },
    closeForm () {
      this.$emit('close', false)
    }
  }

}
</script>

<style>

</style>
