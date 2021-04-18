<template>
<div>
  <p class="pageTitle">
    Frequently Asked Questions Regarding EVs
  </p>
  <button type="button" class="question">What rebates and grants are EV-owners entitled to? </button>
  <div class="answer">
    <p>
      <govt-init></govt-init>
    </p>
  </div>
  <button type="button" class="question">What are the recommended EV models and brands in Singapore?</button>
  <div class="answer">
    <p>
      <models-and-brands></models-and-brands>
    </p>
  </div>
  <button type="button" class="question">How much can I save if I switch to an EV?</button>
  <div class="answer">
    <p>
      <saving-costs></saving-costs>
    </p>
  </div>
  <button type="button" class="question">Where can I charge my EV, and are there sufficient charging stations in Singapore? </button>
  <div class="answer">
    <p>
      <charging-stations-info></charging-stations-info>
    </p>
  </div>
  <button type="button" class="question">How long does the battery last, and will it cost more to operate the EV as the battery gets older?</button>
  <div class="answer">
    <p>
      <battery-info></battery-info>
    </p>
  </div>
  <div id="ask">
    <p>Not what you’re looking for? Try asking in our Community Page!</p>
    <button id="comButton"><router-link class="routerlink" to="/community" exact>Go to the Community Page!</router-link></button>
  </div>
</div>
</template>


<script>
import GovtInit from '../components/GovtInit.vue'
import ModelsAndBrands from '../components/ModelsAndBrands.vue'
import SavingCosts from '../components/SavingCosts.vue'
import ChargStatInfo from '../components/ChargStatInfo.vue'
import BatteryInfo from '../components/BatteryInfo.vue'

export default {
  name: 'Ownership',

  components: {
    'govt-init': GovtInit,
    'models-and-brands': ModelsAndBrands,
    'saving-costs': SavingCosts,
    'charging-stations-info': ChargStatInfo,
    'battery-info': BatteryInfo
  },

  methods: {
    addEventListToColl: function() {
      var arr = document.getElementsByClassName("question");
      var idx;
      for (idx = 0; idx < arr.length; idx++) {
        arr[idx].addEventListener("click", function() {
          this.classList.toggle("active"); 
          var nextEle = this.nextElementSibling;
          if (nextEle.style.maxHeight) {
            nextEle.style.maxHeight = null;
          } else {
            nextEle.style.maxHeight = nextEle.scrollHeight + "px";
          } 
        })
      }
    }
  },

  mounted() {
    this.addEventListToColl();
  }
};
</script>

<style scoped>
.pageTitle {
    font-size: 35px;
    color: black;
    text-align: center;
    position: relative;
    top: 30px;
    text-shadow: 2px 2px 2px gray;
}

.question {
  background-color: #008080;
  cursor: pointer;
  padding: 20px;
  width: 95%;
  border-radius: 10px;
  border: 0;
  margin-top: 30px;
  margin-left: 35px;
  text-align: left;
  font-size: 20px;
  color: white;
}

.active, .question:hover {
  background-color: green;
}

.question:after {
  content: '\002B';
  font-weight: bold;
  font-size: 20px;
  float: right;
  margin-left: 5px;
}

.active:after {
  content: "\2212";
  font-weight: bold;
  font-size: 20px;
  float: right;
  margin-left: 5px;
}

.answer {
  margin-left: 75px;
  margin-right: 75px;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s linear;
  border-radius: 15px;
}

#comButton {
  margin-bottom: 30px;
  background-color: black;
  font-size: 15px;
  border-radius: 10px;
  padding: 5px
}

.routerlink {
  color: white;
  text-decoration: none
}

#ask {
  font-size: 20px;
  margin-top: 40px;
  text-align: center
}
</style>