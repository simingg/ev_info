<template>
    <div class="container">
        <div v-if="error" class="error"> {{error}}</div>
        <form action="#" @submit.prevent="submit">
            <label for="Email"> Email: </label>
            <input type="email" id="Email" v-model="form.email">
            <label for ="Password"> Password: </label>
            <input type="password" id="Password" v-model="form.password">
            <button type="submit" class="login-button"> Log In </button>
            <button type="button" class="forget-button" v-on:click="showModal()"> Forgot Password? </button>
                <Modal v-show="modalVisible" @close="hideModal">
                <template v-slot:header>
                    Type in your email below and a link to reset your password will be sent.
                </template>
                <template v-slot:body>
                    <label for="emailForget"> Email: </label>
                    <input type="email" id="emailForget" v-model="forgetEmail">
                </template>
                <template v-slot:footer>
                    <button type="button" class="btn-green" v-on:click="sendPassordConfirm()"> Confirm </button>
                </template>
                </Modal>
        </form>  
        <div class="space">
            <br>
           <p>Not a member yet? Click below to Signup for exclusive perks! </p>
            <button type="button" class="signup-button" v-on:click="route()"> Signup </button>
        </div>
    </div>

</template>
<script>
import { auth }  from "../firebase.js";
import Modal from '../components/Modal';

export default {
    name: 'Login',
    components: {
        Modal,
    },
    data() {
        return {
            form: {
                email: "",
                password: ""
            },
            error: null,
            modalVisible: false,
            forgetEmail: "",
            emailSending : false,
        };
    },
    methods: {
        submit: function() {
            auth.signInWithEmailAndPassword(this.form.email, this.form.password)
            .then(() => {
                this.$router.replace({ name: 'Home'})
                })
            .catch(err => {
                this.error = err.message;
            });
        },
        route: function() {
            this.$router.push({ name: 'Register' })
        },
        showModal: function() {
            this.modalVisible = true;
        },
        hideModal: function() {
            this.modalVisible = false;
        },
        sendPassordConfirm: function() {
            if (!this.forgetEmail) {
                this.error = "Please type in a valid email address.";
                return;
            }
            this.error = null;
            this.emailSending = true;
            auth.sendPasswordResetEmail(this.forgetEmail).then(() => {
                this.emailSending = false;
                alert("Check your email!");
                this.hideModal()
            })
            .catch(error => {
                this.emailSending = false;
                this.error = error.message;
            });
        },
    },
}
</script>
<style scoped>

label {
    display: block;
    width: 150px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    margin-top: 5px;
    margin-bottom: 5px;
}
.error {        
    color: red;
    font-size: 1.2rem;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
}

input {
    display: block;
    width: 30%;
    font-size: 1.2rem;
    line-height: 1;
    font-weight: 400;
    text-align: left;
    box-sizing: border-box;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid black;
    outline: none;
      border-radius: 5px;

}
.login-button {
  display: block;
  width: 30%;
  font-size: 1.5rem;
  line-height: 1;
  font-weight: 300;
  text-transform: uppercase;
  color: white;
  background-color: #008080;
  padding: 10px 10px;
  margin: 30px auto;
  border: 0;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
}
.forget-button {
  display: block;
  width: 30%;
  /* font-size: 1.5rem; */
  line-height: 1;
  /* font-weight: 300; */
  text-transform: uppercase;
  color: black;
  /* background: #76C056;; */
  padding: 5px;
  margin: 30px auto;
  border: 0;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
}
.signup-button {
  display: block;
  width: 15%;
  font-size: 1.2rem;
  line-height: 1;
  font-weight: 300;
  text-transform: uppercase;
  color: white;
  background-color: #008080;
  padding: 5px 5px;
  margin: 10px auto;
  border: 0;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  margin-bottom: 20px;
}

button:hover, button:active {
  background-color: green;
}

.forget-button:hover, .forget-button:active{
    background-color: grey;
}

p {
    text-align: center;
}
</style>