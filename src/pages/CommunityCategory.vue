<template>
  <div class="col-full">
    <h1 class="heading-title">
      {{ category }}
    </h1>
    <router-link class='thread-button' 
    tag="button" 
    v-on:click="route($event)"
     v-if="user"
    :to="{name: 'CommunityNewThread', params: {category: category}}">
      Start a new thread
    </router-link>
    <h3 class="list-title">
      <a>Threads</a>
    </h3>

    <ul class="forum-list">   
     <li v-for="obj in categoryForums" v-bind:key="obj.thread_id" class='forum-listing'>
      <router-link :to="{name: 'CommunityForum', params: {category: category, forums: obj}}">
        {{ obj.Subject }}
      </router-link>
     </li>
    </ul>
  </div>
</template>

<script>
  import database from './../firebase.js'
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
        categoryForums: [],
      }
    },
    methods: {
      getCategoryForums () {
        database.collection('forum').doc(this.category)
        .collection('threads').get()
        .then((querySnapShot)=> {
          querySnapShot.forEach(doc => {
            var thread_id = doc.id
            var main_msg = doc.data()
            main_msg['thread_id'] = thread_id
            main_msg['replies'] = []
            database.collection('forum').doc(this.category)
              .collection('threads').doc(thread_id)
              .collection('replies').get()
              .then((querySnapShot)=> {
                querySnapShot.forEach(doc1 => {
                  main_msg['replies'].push(doc1.data())
                })
              })
            this.categoryForums.push(main_msg);          
          })
        })
      }
    },
    created: function() {
        this.getCategoryForums()
    }
  }
</script>

<style scoped>
.thread-button {
  float: right;
  color: black;
  background-color: #89c6af;
  box-shadow: inset 0px 0px 0px 1.6px #57AD8D;
  padding: 15px 30px;
  border-radius: 5px;
  border: none;
  transition: all 0.4s ease;
  cursor: pointer;
}
.thread-button:hover {
  color: white;
}
.heading-title {
  border-bottom-left-radius: 20px;
  color: black;
  display: flex;
  justify-content: flex-start;
  position: relative;
  padding: 10px 20px;
  margin: 0;
  display: inline-block;
}
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
  color: rgb(96, 168, 111);
}
.forum-list .forum-listing:nth-child(odd) {
  background: rgba(141, 141, 141, 0.267);
  border-bottom-left-radius: 20px;
}

.forum-list .forum-listing:last-child {
  border-bottom-left-radius: 20px;
}
.forum-list .forum-listing a:hover {
  color: #89c6af;
} 
li a {
    text-decoration: none;
    color: inherit;
}
</style>