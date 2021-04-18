<template>
<div class="col-full">
    <p class="headerText">Welcome to the Community Page!</p>
    <CategoryList/>
  </div>
</template>


<script>
import CategoryList from '../components/CategoryList'

export default {
  components: {
      CategoryList
    },
};
</script>


<style scoped>

.col-full {
  flex-basis: 98%;
  margin: 0 1%;
  text-align: center;
}

.headerText{
    font-size: 35px;
    color: black;
    text-align: center;
    position: relative;
    top:10px;
    bottom:10px;
    text-shadow: 2px 2px 2px gray;
}
</style>