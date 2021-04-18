<template>
  <div class="forum-list">
    <h2 class="list-title">
      <router-link :to="{name: 'CommunityCategory', params: {category: category}}" class='router-link'>
        {{ category }}
      </router-link>

    </h2>
  </div>
</template>

<script>

  export default {
    props: {
      category: {
        required: true,
        type: String
      }
    },

    }
</script>

<style scoped>
.router-link {

    text-decoration: none;
    color: inherit;

}
.list-title {
  border-bottom-left-radius: 20px;
  color: rgb(96, 168, 111);
  font-weight: 100;
  display: flex;
  width: 100%;
  justify-content: flex-start;
  position: relative;
  padding: 10px 20px;
  margin: 0;
}

.list-title a:hover {
  color: #89c6af;
} 
.forum-list {
  padding: 0;
  background: black;
  margin: 20px 0;
  color: lightcyan;
}

.forum-list .forum-listing {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10px 20px 30px;
}


.forum-list .forum-listing:last-child {
  border-bottom-left-radius: 0;
}

.forum-list .forum-listing .forum-details {
  flex-basis: 52%;
}

@media (min-width: 240px) and (max-width: 720px) {
  .forum-list .forum-listing .forum-details {
    flex-basis: 100%;
  }
}

.forum-list .forum-listing .forum-details ul.subforums {
  padding-left: 5px;
  display: block;
}

.forum-list .forum-listing .forum-details ul.subforums::before {
  content: '⌙';
  margin-right: 5px;
}

.forum-list .forum-listing .forum-details ul.subforums.subforums li {
  display: inline;
}

.forum-list .forum-listing .forum-details ul.subforums.subforums li:not(:last-of-type)::after {
  content: '\f111';
  font-family: 'FontAwesome';
  font-size: 4px;
  position: relative;
  top: -3px;
  left: 2px;
  padding: 0 3px;
  color: #878787;
}

.forum-list .forum-listing .threads-count {
  flex-basis: 12%;
  text-align: center;
}

.forum-list .forum-listing .threads-count .count {
  font-weight: 100;
  display: block;
}

.forum-list .forum-listing .last-thread {
  flex-basis: 32%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.forum-list .forum-listing .last-thread .avatar {
  margin-right: 10px;
}

</style>
