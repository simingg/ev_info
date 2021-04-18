<template> 
  <div class="forum-list">
    <h2 class="list-title">
      <a>Discussion</a>
    </h2>
    <CategoryListItem
      v-for="obj,category in categories"
      :category="category"
      :key="category"
      class="forum-listing"/>

  </div>
</template>

<script>
  
  import CategoryListItem from '@/components/CategoryListItem'


  export default {
    components: {
      CategoryListItem
    },
    computed: {
        categories() {
            return this.$store.getters.getCategories;
        },
    },
  }
</script>

<style scoped>
.list-title {
  background-color: #008080;
  border-radius: 10px;
  color: #f5f8fe;
  font-weight: 100;
  display: flex;
  width: 100%;
  justify-content: flex-start;
  position: relative;
  padding: 10px 20px;
  margin: 0;
}


.forum-list {
  padding: 0;
  background: white;
  /* margin: 20px 0; */
}

.forum-list .forum-listing {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10px 20px 30px;
}

.forum-list .forum-listing:nth-child(odd) {
  background: rgba(141, 141, 141, 0.267);
  border-bottom-left-radius: 20px;
}

.forum-list .forum-listing:last-child {
  border-bottom-left-radius: 20px;
}

</style>
