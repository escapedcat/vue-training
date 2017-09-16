<template>
  <div>
    <a href="#" @click.prevent="everywhere">hier</a>

    <form
      @submit.prevent="storeFormData"
    >
      <label for="twitt">twitter handle</label>

      <input
        type="text"
        id="twitt"
        v-model="twitter"
        placeholder="twitter handl please"
      >
      <br>
      
      <button type="submit">Send</button>
    </form>
    <br>
    <br>
    <p>
      {{twitter}}
    </p>
    <p>
      {{$store.state.twitter}}
    </p>
  </div>
</template>

<script>
import everywhere from '../mixins/everywhere'

export default {
  name: 'contact',
  mixins: [
    everywhere
  ],
  data () {
    return {
      twitter: 'graefinsenil'
    }
  },
  computed: {

  },
  methods: {
    storeFormData () {
      this.$store.commit('SET_TWITTER', this.twitter)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
