<template>
  <div>
    <!-- {{headline}}
    <br> -->
    <img 
      height="50" src="./../assets/logo.png"
    >

    <ul>
      <li v-for="item in navitems">
        <router-link :to="{ name: item.name}">
          {{ item.title }}
        </router-link>
      </li>
    </ul>
<!-- 
    <ul>
      <li
        v-for="item in caritems"
        @click="itemClick(item.name)"
      >
        {{ item.name }}
      </li>
    </ul> -->



  </div>
</template>

<script>
export default {
  name: 'StdHeader',
  props: {
    headline: {
      default: 'Default headline',
      type: String
    }
  },
  data () {
    return {
      // car: null,
      navitems: [
        {
          name: 'Hello',
          title: 'Hello You'
        },
        {
          name: 'Goodbye',
          title: 'Goodbye You'
        },
        {
          name: 'Contact',
          title: 'Contact Us'
        }
      ],
      caritems: [
        {
          name: 'Audi'
        },
        {
          name: 'VW'
        },
        {
          name: 'Mercedes'
        }
      ]
    }
  },
  methods: {
    itemClick (name) {
      console.log('logo clicked', name)
      // this.car = name
      this.$emit('hausbrennt', name)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .router-link-exact-active {
    color: deeppink
  }
</style>
