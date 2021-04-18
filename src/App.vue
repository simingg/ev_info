<template>
  <div id="app">
    <Header/>
   <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Footer,
    Header
  },
  methods: {
    setUser() {
      this.$store.dispatch("setUser");
    },
    setCategories() {
      this.$store.dispatch("setCategories");
    },

  },
  created(){
    this.setUser();
    this.setCategories();
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;

}


</style>
