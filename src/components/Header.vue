<template>
  <div class="header">
    <nav class="flexWrap">
        <router-link to="/" class="flexCol" exact>
          <img id="logo" src="../assets/logo.png">
        </router-link>
      <div class="flexCol">
        <a class="navbar-item"> <router-link to="/" exact>Home</router-link></a>
        <a class="navbar-item"> <router-link to="/benefits" exact>Benefits</router-link></a>
        <a class="navbar-item"> <router-link to="/charging" exact>Charging</router-link></a>
        <a class="navbar-item"> <router-link to="/ownership" exact>Ownership</router-link></a>
        <a class="navbar-item"> <router-link to="/community" exact>Community</router-link></a>
        <a class="navbar-item" href="https://electric-vehicle-sg-dashboard.herokuapp.com/" target="_blank"> Dashboard </a>

      </div>
      <div class="headerButtons">
        <router-link tag="button" to="/login" v-if="!user" exact>Login</router-link>
        <router-link tag="button" to="/register" v-if="!user" exact>Sign Up</router-link>
        <router-link to="/myAccount" v-if="user"> My Account </router-link>
        <button @click="signOut" v-if="user"> Sign Out </button>
      </div>
    </nav>
    
  </div>
</template>

<script>
import { auth } from "../firebase.js";
  export default {
    components: {
    },
    computed: {
      user() {
        return this.$store.getters.getUser;
      }
    },
    methods: {
      signOut: function() {
        auth.signOut().then(() => {
          this.$router.replace({ name: 'Home'}).catch(() => {});
        });
      },
    },
  }
</script>

<style scoped>
.flexWrap {
  display: flex;
  overflow: hidden; 
  border-bottom: 1px solid #000;
  text-align: center;
}

.flexCol {
  box-sizing: border-box;
  width: 50%;
  text-align: center;
  margin: auto;
}

.headerButtons {
  box-sizing: border-box;
  /* padding: 10px; */
  width: 50.3%;
  text-align:right;
  margin: auto;
}

#logo {
  line-height: 10px;
  width: 180px;
  float: left;
}

#side {
  text-align: right;
}

.header a {
  color: black;
  text-align: center;
  padding: 10px;
  text-decoration: none;
  font-size: 18px; 
  line-height: 40px;
}

a.router-link-active{
  text-decoration: underline;
  text-decoration-color:black;
  text-decoration-thickness: 2px;
} 

a:active {
  text-decoration: underline;
  text-decoration-color:black;
  text-decoration-thickness: 2px;
}

button {
  margin: 8px;
  background-color: black;
  border-radius: 11px;
  border-style: solid;
  border-color: black;
  padding:  10px 24px;
  font-size: 15px;
  display: inline-block;
  color: white; 
  box-shadow: inset 0px 0px 0px 1.6px #13573e;
  cursor: pointer;
}

.navbar-item {
  display: inline-block;
  vertical-align: middle;
  horizontal-align: middle;
}
</style>