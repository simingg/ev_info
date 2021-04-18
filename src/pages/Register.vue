<template>
    <div class="container">
        <form action="#" @submit.prevent="submit">
            <label for="Username"> Name: </label>
            <input type="text" id="username" v-model="form.name">
            <label for="Email"> Email: </label>
            <input type="email" id="email" v-model="form.email">
             <div class="form-group" :class="{ 'form-group--error': $v.form.password.$error }">
            <label for ="Password"> Password: </label>
            <input type="password" id="password" v-model="form.password">
            </div>
            <div class="error" v-if="!$v.form.password.minLength">Password must have at least {{$v.form.password.$params.minLength.min}} letters.</div>
            <div class="form-group" :class="{ 'form-group--error': $v.form.passwordConfirm.$error }">
            <label for ="Confirm Password"> Confirm Password: </label>
            <input type="password" id="password2" v-model="form.passwordConfirm">
            </div>
            <div class="error" v-if="!$v.form.passwordConfirm.sameAsPassword">Passwords must be identical.</div>
            <label type="text" id="phoneNumber"> Phone Number: </label>
            <input type="text" id="phoneNumebr" v-model="form.phoneNumber">
            <button type="submit" :disabled="submitStatus === 'PENDING'"> Register </button>
            <p class="typo__p" v-if="submitStatus === 'OK'">Thanks for signing up!</p>
            <p class="typo__p" v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p>
            <p class="typo__p" v-if="submitStatus === 'PENDING'">Sending...</p>
        </form>    
    </div>
</template>

<script>
import { auth } from "../firebase.js";
import database from "../firebase.js";
import { required, minLength, sameAs } from 'vuelidate/lib/validators'

export default {
    name: 'Register',
    data() {
        return {
            form: {
                name: "",
                email: "",
                password: "",
                passwordConfirm: "",
                phoneNumber: "",
                savedLocations: [],
            },
            submitStatus: "",
            error: null,
            authUser: null,
        }
    },
    validations: {
        form: {
            password: {
            required,
            minLength: minLength(8)
            },
            passwordConfirm: {
                sameAsPassword: sameAs('password')

            }
        }
    },
    methods: {
        submit: function() {
            this.$v.$touch()
            if (this.$v.$invalid) {
                this.submitStatus = 'ERROR'
            } else {
                // do your submit logic here
            this.submitStatus = 'PENDING'
            auth.createUserWithEmailAndPassword(this.form.email, this.form.password).catch(err => {
                this.error = err.message;
            });
            database.collection('users').add({
                name: this.form.name,
                email: this.form.email,
                phoneNumber: this.form.phoneNumber,
                password: this.form.password,
                type: ['user'],
                savedLocations: [],
            })
            auth.signInWithEmailAndPassword(this.form.email, this.form.password);
            setTimeout(() => {
                this.submitStatus = 'OK'
                this.$router.replace({ name: 'Home'})
                }, 500)
            }
        },
    },
}
</script>

<style scoped>

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

button {
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

button:hover, button:active {
  background-color: green;
}

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
.typo__p {
    font-size: 1.2rem;
    color: green;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
}
.invalid.untouched ~ .error {
    display: none;
}
</style>