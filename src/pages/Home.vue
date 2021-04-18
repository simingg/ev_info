<template>
<div class='homepage'>

  <div class='content'>
    <nav class='logo'>
      <p class="headertext">
      THE FUTURE OF MOBILITY HAS ARRIVED
      </p>
    </nav>
    <img alt="ev_car" src="../assets/ev_car.png" height="300">
    <div class='pagecontent'>
    <h3 class="description">
        Welcome to the electric world!
    </h3>
      
      <p>A group of EV enthusiasts have created this valuable resource for EV-related information! Join us as a member for free if you are interested in helping us grow!
      </p>
      <ul class='featurelist'>
        <li>Charging Information</li>
        <li>Ownership Information</li>
        <li>Benefits of Electric Vehicles</li>
        <li>Our EV Community</li>
      </ul>
    
    </div>
  </div>

  <div class='partner_content'>
    <h2 class='subheader'>Supported by the World's Best EV Manufacturers</h2>
    <vue-horizontal class='logo_content'>
      <ul class='logolist'>
      <li><img class="logos" src="../assets/tesla_logo.png"></li>
      <li><img class="logos" src="../assets/bmw_logo.png"></li>
      <li><img class="logos" src="../assets/mercedes_logo.png"></li>
      <li><img class="nissan" src="../assets/nissan.svg"></li>
      <li><img class="logos" src="../assets/Volkswagen_logo.png"></li>
      </ul>
    </vue-horizontal>
  </div>

 </div>
</template>


<script>
import VueHorizontal from "vue-horizontal";

export default {
  components: {
    VueHorizontal
  },

  data() {
    return {
    }
  }
};
</script>


<style scoped>



.content { 
  background-color: rgba(0, 0, 0, 0.068);
  text-align: center;
}

.content img{
  float:left;
  padding-left: 29%;
  
}


.pagecontent {
  display: flex;

  flex-direction: column;
  width: 300px;
  text-align: left;
  padding-bottom: 10px;
}

.subheader {
  margin: 20px;
  text-align: center;
}

.logo_content {
  
  
}

.logos {
  line-height: 10px;
  width: 100px;
  padding: 20px;
  justify-content: center;
  
}

.nissan {
  line-height: 10px;
  width: 120px;
  padding: 20px;
  justify-content: center;
  
}

.headertext{
    font-size: 35px;
    color: black;
    text-align: center;
    position: relative;
    top:30px;
    text-shadow: 2px 2px 2px gray;
}

.logolist {
  display: flex;
  flex-wrap: flex;
  list-style-type: none;
  padding: 0;
  margin-right: auto;
  margin-left: auto;
}

.logolist li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 10px;
  
  
}
</style>