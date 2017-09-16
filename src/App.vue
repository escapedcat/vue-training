<template>
  <div id="app">
    {{$store.state.twitter}}
    <std-header
      v-on:hausbrennt="stuffHappened"
      headline="Gruenes Grass ist gruen"></std-header>
    <router-view></router-view>
  </div>
</template>

<script>
import StdHeader from '@/components/StdHeader'

export default {
  name: 'app',
  components: {
    StdHeader
  },
  methods: {
    stuffHappened (car) {
      console.log('stuff happened', car)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
