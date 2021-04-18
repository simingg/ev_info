<template>
<div>
  <p class="chargingText">
    Charging Stations
  </p>
<p align="center"><iframe width="90%" height="500px" frameborder="0" allowfullscreen src="//umap.openstreetmap.fr/en/map/ev-charging-stations-in-singapore_584696?scaleControl=false&miniMap=false&scrollWheelZoom=true&zoomControl=true&allowEdit=false&moreControl=true&searchControl=true&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=undefined&captionBar=false&locateControl=false"></iframe></p>
<br>
<div class="largeBox" v-if="user">
        <div class="box">
        <h4> Your Saved Locations </h4>
            <ul class="savedlocs">   
            <li v-for="(loc, index) in savedLocations" v-bind:key='loc.postalCode' class="location-list">
                <p> Address: {{ loc.address }} </p>
                <p> Name:  {{ loc.name }} </p>
                <p> Postal Code: {{ loc.postalCode}} </p>
                <button @click="deleteLocation(index)"> Delete </button>
             </li>
            </ul>
        </div>
    </div>
<ul>
  <li>
    <img src="https://static-s.aa-cdn.net/img/gp/20600000794734/QNg09q6K9B9XAC5T6uty5M-tuJPLY4OBK2-x2qR8LTte1yiqrsYkaowog1-rSDaNgQJg=s300" width="50" height="50">
    <br>
    <a href="https://play.google.com/store/apps/details?id=sg.com.singaporepower.spservices"> Android App</a>
    <a href="https://apps.apple.com/sg/app/sp-utilities-greenup-your-day/id596749130"> iOS App</a>
  </li>

  <li>
    <img src="https://upload.wikimedia.org/wikipedia/en/8/87/BlueSGLogo.png" width="90" height="50">
    <br>
    <a href="https://play.google.com/store/apps/details?id=com.bluesg.androidapp&hl=en_SG&gl=US"> Android App</a>
    <a href="https://apps.apple.com/sg/app/bluesg/id1313351301"> iOS App</a>
  </li>

  <li>
    <img src="https://greenlots.com/wp-content/themes/greenlots/assets/images/greenlots_logo_2019.png" width="240" height="50">
    <br>
    <a href="https://play.google.com/store/apps/details?id=com.zecosystems.greenlots&hl=en_SG&gl=US"> Android App</a>
    <a href="https://apps.apple.com/sg/app/greenlots/id617977159"> iOS App</a>
  </li>

</ul>
</div>
</template>

<script>
import database from "../firebase";

export default {
  name: 'Charging',
  data() {
    return {
      savedLocations : [],
      uid: '',
    }
  },
  computed: {
     user() {
        return this.$store.getters.getUser;
     }
  },
  methods: {
        fetchLocation: function(user) {
          if (user != null) {
            database.collection('users').get().then((querySnapshot) => {
              let item = {}
              querySnapshot.forEach((doc) => {
                item = doc.data()
                if (item.email == user.email) {
                  this.savedLocations = item.savedLocations;
                  this.uid = doc.id;
                }
              })
            })
          }
        },
        deleteLocation: function(index) {
          this.savedLocations.splice(index, 1);
            database.collection('users').doc(this.uid).update({
              "savedLocations": this.savedLocations
            })
        },
  },
  created() {
    this.fetchLocation(this.user);
  }
};
</script>


<style scoped>
.chargingText{
    font-size: 35px;
    color: black;
    text-align: center;
    position: relative;
    top:10px;
    bottom:10px;
    text-shadow: 2px 2px 2px gray;
}

iframe {
  bottom: 5px;
}

ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}

li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 10px;
}

img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

a:link, a:visited {
  background-color: #008080;
  color: white;
  padding: 14px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border-radius: 10px;
  margin: 5px;
}

a:hover, a:active {
  background-color: green;
}

.box {
    display: block;
    width: 60%;
    font-size: 1.2rem;
    text-align: center;
    background-color: lightgrey;
    outline: none;
    border-radius: 10px;
    margin-left: auto;
    margin-right: auto;
}

.savedlocs ul {
  display: inline;
  list-style-type: none;
}

.savedlocs li {
  text-align: left;
  padding: 10px;
  flex-grow: 1;
  flex-basis: 300px;
}

h4 {
  padding: 5px;
}
</style>

