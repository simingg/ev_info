<template>
<div>
  <p class="pageTitle">
    Why Switch to Electric?
  </p>

  <div id="pageContent1">
    There are many benefits to owning an electric vehicle instead of a traditional internal combustion vehicle!
  </div>

  <div id="pageContent2" class="mainContainer1">
    <div class="mainBenefit">
      <p id="benefitsTitle1" class="benefitsTitle">Lower maintenance and running costs</p>
      <img alt="Car Maintenance" src="../assets/car_maintenance.jpg" class="image">
      <br>
      <button id="button1" v-on:click="showMaintenanceBenefit=!showMaintenanceBenefit">Learn more</button>
    </div>
    <div class="mainBenefit">
      <p id="benefitsTitle2" class="benefitsTitle">Cleaner air in your living environment</p>
      <img alt="Clean air" src="../assets/clean_air.jpg" class="image">
      <br>
      <button id="button2" v-on:click="showCleanAirBenefit=!showCleanAirBenefit">Learn more</button>
    </div>
    <div class="mainBenefit">
      <p id="benefitsTitle3" class="benefitsTitle">Use less of depleting fossil fuels</p>
      <img alt="Fossil fuel" src="../assets/fossil_fuel.jpg" class="image">
      <br>
      <button id="button3" v-on:click="showFossilFuelBenefit=!showFossilFuelBenefit">Learn more</button>
    </div>
  </div>

  <div v-show="showMaintenanceBenefit" class="mainContainer2">
    <div class="leftContainer">
      <iframe width="500" height="315" src="https://www.youtube.com/embed/X_11rlVF3Dg"></iframe>
    </div>
    <div class="leftVerticalLine">
      <div id="maintenanceBenefitExplanation">
        New <a href="https://www.betterenergy.org/blog/consumer-reports-study-finds-electric-vehicle-maintenance-costs-are-50-less-than-gas-powered-cars/">research</a> 
        from Consumer Reports shows that pure EVs—which have fewer moving parts—need <strong>less maintenance</strong>, 
        and generally <strong>cost less to repair</strong> than the average gas-powered vehicle.
        <br><br> 
        Consumers who purchase an EV can expect to save an average of <strong>$4,600</strong> in 
        repair and maintenance costs over the life of the vehicle compared with a gasoline-powered car!
        <br><br>
        Click on the video to view the cost comparison between an electric vehicle and gas vehicle!
      </div>
    </div>
  </div>

  <div v-show="showCleanAirBenefit" class="mainContainer2">
    <div class="leftContainer">
      <img alt="How Nissan LEAF contributes to better air quality" src="../assets/nissan_air_pollution.jpg" id="cleanAirInfo">
    </div>
    <div class="leftVerticalLine">
      <div id="cleanAirBenefitExplanation">
        Powered by electricity, EVs are a much <strong>cleaner alternative</strong> as they produce 
        <a href="https://blog.ucsusa.org/dave-reichmuth/are-electric-vehicles-really-better-for-the-climate-yes-heres-why">
        significantly fewer emissions.</a> It <strong>eliminates harmful tailpipe pollutants</strong> 
        that kill thousands of people every year, and <strong>emits less carbon dioxide</strong>, 
        slowing down climate change. 
        <br><br>
        Thus, driving an EV makes our country a better place where everyone can enjoy <strong>cleaner air</strong>!
        <br><br>
        View the infographic on the left to get a better idea of how an electric vehicle contributes to better air quality!
      </div>
    </div>
  </div>

  <div v-show="showFossilFuelBenefit" class="mainContainer2">
    <div class="leftContainer">
      <co2-line-chart :width=505></co2-line-chart>
    </div>
    <div class="leftVerticalLine">
      <div id="FossilFuelBenefitExplanation">
        Mining of fossil fuels is highly <strong>damaging</strong> to the environment, and its supply is quickly <strong>depleting</strong>, 
        From the graph on the left, we can also see that carbon dioxide emissions from the combustion of 
        fossil fuels in Singapore has generally been  <strong>increasing</strong> over the years. 
        Thus, every one of us should take small steps to move away from fossil fuels. 
        Making the switch to EV is one way to do so. 
        <br><br>
        Furthermore, a <a href="https://www.bbc.com/news/science-environment-51977625">study</a> has shown that <strong>EVs lead to lower carbon emissions overall</strong>, 
        even if electricity generation still relies on fossil fuels. 
        Even if Singapore still relies mainly on fossil fuels for electricity generation, 
        choosing an EV still makes a small but <strong>significant</strong> difference!
      </div>
    </div>
  </div>
</div>
</template>

<script>
import co2LineChart from "../components/LineChart.js";
export default {
  name: 'Benefits',

  data() {
    return {
      showMaintenanceBenefit: false,
      showCleanAirBenefit: false,
      showFossilFuelBenefit: false
    }
  },

  components: {
    "co2-line-chart": co2LineChart
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
    margin-bottom: 50px
}

.image {
  height: 265px;
}

.mainBenefit {
  flex: 0.5;
  margin: 20px;
}

.benefitsTitle {
  font-size: 17px;
  font-weight: bold
}

#benefitsTitle1 {
  position: relative;
  left: -43px
}

#benefitsTitle2 {
  position: relative;
  left: -8px
}

#benefitsTitle3 {
  position: relative;
  left: -67px
}

#pageContent1 {
  font-size: 23px;
  margin-bottom: 60px;
  text-align: center
}

#pageContent2 {
  margin-bottom: 80px;
  text-align: center;
}

button {
  position: relative;
  background-color: black;
  color: white;
  font-size: 13px;
  border-radius: 10px;
  padding: 4px;
  outline: 0;
  margin-top: 12px
}

#button1 {
  left: -160px
}

#button2 {
  left: -120px
}

#button3 {
  left: -160px
}

.leftVerticalLine {
  border-left: 6px solid black;
  margin-left: 20px;
  margin-bottom: 45px
}

#maintenanceBenefitExplanation {
  margin: 90px 70px 0px 70px
}

#cleanAirBenefitExplanation {
  margin: 280px 70px 0px 70px
}

#FossilFuelBenefitExplanation {
  margin: 110px 70px 0px 70px
}

#cleanAirInfo {
  width: 504px;
}

.mainContainer1 {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
}

.mainContainer2 {
  display: flex;
}

.leftContainer {
  flex: 0.5;
  margin: 40px 70px 80px 70px
}
</style>