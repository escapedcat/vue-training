<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <ul>
      <li
        v-for="item in people"
        @click="filterPeopleByColor(item.peopleColor)"
      >
        {{item.peopleColor}}
      </li>
    </ul>

    <ul>
      <li
        v-for="item in people"
        @click="showColor(item.peopleColor)"
      >
        {{item.name}}
      </li>
    </ul>

    <p v-if="color">
      color: {{color}}<br>
      COLOR: {{collorUppercase}}
    </p>

    <a
      href="#"
      @click.prevent="setColorDefault">
      color white
      {{color}}
    </a>
    <br>
    <a href="#" @click.prevent="everywhere">da</a>

  </div>
</template>

<script>
import everywhere from '../mixins/everywhere'

export default {
  name: 'goodbye',
  mixins: [
    everywhere
  ],
  data () {
    return {
      msg: 'Vue.js App says goodbye',
      color: null,
      people: [
        {
          name: 'Verena',
          peopleColor: 'coral'
        },
        {
          name: 'Hannes',
          peopleColor: 'aqua'
        },
        {
          name: 'Lisa',
          peopleColor: 'pink'
        },
        {
          name: 'Peter',
          peopleColor: 'green'
        },
        {
          name: 'Romina',
          peopleColor: 'red'
        },
        {
          name: 'Powa',
          peopleColor: 'purple'
        }
      ]
    }
  },
  computed: {
    collorUppercase () {
      return this.color.toUpperCase()
    }
  },
  methods: {
    showColor (value) {
      this.color = value
    },
    filterPeopleByColor (value) {
      console.log(value)
    },
    // collorUppercase () {
    //   console.log('MTHOD!')
    //   return this.color.toUpperCase()
    // },
    setColorDefault () {
      this.color = 'white'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
