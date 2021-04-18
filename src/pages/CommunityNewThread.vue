<template>
  <div class="col-full">
    <h2 class="heading-title">
      Start a new thread in {{ this.category }}!
    </h2>
    <p>Welcome {{this.name}}, what do you want to talk about?</p>
   <form >
    <label>Subject: </label>
    <input type="text" class="subject" v-model="subject" placeholder="What do you want to talk about?">
    <br><br>
    <label>Message: </label>
    <textarea rows="5" class="msg" v-model="msg" placeholder="What do you want to say?"/>
    <br><br>
    <button v-on:click="addThread()">Submit</button>

  </form>
  </div>
</template>

<script>
  import database from './../firebase.js'
  import firebase from "firebase";
  import 'firebase/firestore';
  import 'firebase/auth';
  
  export default {
    computed: {
        user() {
            return this.$store.getters.getUser;
        },
    },
    props: {
      category: {
        required: true,
        type: String
      }
    },
    data(){
      return{
        subject: "",
        msg: "",
        email: null,
        name: null,
      }
    },
    methods: {
      fetchUserInfo: function(user) {
            database.collection('users').get()
                .then((querySnapshot) => {
                    let item = {}
                    querySnapshot.forEach((doc) => {
                        item = doc.data()
                        if (item.email == user.email) {
                            this.name = item.name,
                            this.email = item.email
                        }
                    })
                    
                })
        },

      addThread: function() {
        database.collection("forum").doc(this.category).collection("threads").add({
                User: this.name,
                Subject: this.subject,
                Message: this.msg,
                Timestamp: firebase.firestore.Timestamp.fromDate(new Date(Date.now())),
        })
        this.$router.push('/community'); 
      }
    },
    created: function() {
      this.fetchUserInfo(this.user)

    }
  }
</script>

<style scoped>
input[type=text], textarea {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
button {
  width: 100%;
  background-color: #008080;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #45a049;
}
div {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
</style>