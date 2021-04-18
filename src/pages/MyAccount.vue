<template>
<div class="container">
    <h2> Welcome {{ this.name }}! </h2>
    <div class="largeBox">
        <div class="box">
        <p> Email: {{ this.email }} </p>
        <p> Password: {{ this.password }} </p>
        <p> Phone number: {{ this.phoneNumber }} </p>
                <button type="button" class="btn" @click="showModal"> Update Phone Number </button>
                <Modal v-show="modalVisible" @close="closeModal">
                <template v-slot:header>
                    Type in your new phone number below.
                </template>
                <template v-slot:body>
                    <label for="updatePhoneNumber"> Phone Number: </label>
                    <input type="text" id="PhoneNumber" v-model="update_phoneNumber">
                    <button v-on:click="updatePhoneNumber"> Confirm </button>
                </template>
                </Modal>
        </div>
    </div>
    <div class="largeBox">
        <div class="box">
        <h4> Your Saved Locations </h4>
            <ul class>   
            <li v-for="(loc, index) in savedLocations" v-bind:key='loc.postalCode' class="location-list">
                <p> Address: {{ loc.address }} </p>
                <p> Name:  {{ loc.name }} </p>
                <p> Postal Code: {{ loc.postalCode}} </p>
                <button @click="deleteLocation(index)"> Delete </button>
             </li>
            </ul>
        </div>
    </div>
    <div class="largeBox">
        <div class="box">
            <h4> Add a Location </h4>
            <form action="#" @submit.prevent="submit">
                <label for="location_name"> Location Name: </label>
                <input type="text" id="name" v-model="addLocation.name">
                <label for ="postal_code"> Postal Code: </label>
                <input type="text" id="postalCode" v-model="addLocation.postalCode">
                <label for="address"> Address: </label>
                <input type="text" id="address" v-model="addLocation.address">
                <button type="submit"> Add  </button>
            </form>
        </div>
    </div>
</div>
</template>

<script>
import database from "../firebase.js";
import Modal from "../components/Modal.vue"
export default {
    name: 'Dashboard',
    components: {
        Modal,
    },
    computed: {
        user() {
            return this.$store.getters.getUser;
        },
    },
    data() {
        return {
            doc_id: null,
            email: null,
            questions: null,
            name: null,
            password: null,
            phoneNumber : '',
            update_phoneNumber: '',
            modalVisible: false,
            savedLocations: [],
            addLocation: {'address': '', 'name': '', 'postalCode': '' }
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
                            this.doc_id = doc.id,
                            this.name = item.name,
                            this.password = item.password,
                            this.email = item.email,
                            this.phoneNumber = item.phoneNumber
                        }
                    })
                    
                })
        },
        fetchLocation: function(user) {
            database.collection('users').get()
                .then((querySnapshot) => {
                    let item = {}
                    querySnapshot.forEach((doc) => {
                        item = doc.data()
                        if (item.email == user.email) {
                            this.savedLocations = item.savedLocations;
                        }
                    })
                })
        },
        deleteLocation: function(index) {
          this.savedLocations.splice(index, 1);
          database.collection('users').doc(this.doc_id).update({
            'savedLocations': this.savedLocations
          })
        },
        updatePhoneNumber: function() {
            database.collection('users').doc(this.doc_id).update({
                'phoneNumber': this.update_phoneNumber
            }).then(() => { location.reload() })
        },
        showModal: function() {
            this.modalVisible = true;
        },
        closeModal: function() {
            this.modalVisible = false;
        },
        submit: function() {
            this.savedLocations.push(this.addLocation);
            database.collection('users').doc(this.doc_id).update({savedLocations : this.savedLocations }).then(() => { location.reload() })

        }
    },
    created() {
        this.fetchUserInfo(this.user)
        this.fetchLocation(this.user)
    }
}

</script>

<style scoped>
/* .largeBox {
    display: flex;
    height: 500px;
    border: black 2px solid;
} */
.box {
    display: block;
    width: 50%;
    font-size: 1.5rem;
    line-height: 1;
    font-weight: 400;
    text-align: left;
    border: 1px solid black;
    outline: none;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
    
}
.location-list {
    display: block;
    width: 80%;
    font-size: 1.5rem;
    line-height: 1;
    font-weight: 400;
    text-align: left;
    padding: 10px 10px;
    margin: 50px auto;
    border: 1px solid black;
    outline: none;
}
p {
    margin: 30px;
    
}

h2 {
    margin-left: 10px;
    text-align: center;
}

h4 {
    margin-left: 20px;
}
.box label {
    display: block;
    text-align: center;
    
    
}
input {
    display: block;
    width: 50%;
    font-size: 1.5rem;
    line-height: 1;
    font-weight: 400;
    text-align: left;
    padding: 10px 10px;
    margin: 10px auto;
    border: 1px solid black;
    outline: none;
}
button {
  display: block;
  width: 30%;
  font-size: 1.5rem;
  line-height: 1;
  font-weight: 300;
  color: white;
  background: #008080;
  padding: 10px 10px;
  margin: 30px auto;
  border: 0;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
}

button:hover, button:active {
  background-color: green;
}
</style>