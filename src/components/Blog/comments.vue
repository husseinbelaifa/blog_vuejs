<template>
  <div>
    <div class="post-comments">
      <header>
        <h3 class="h6">Post Comments
          <span class="no-of-comments">(3)</span>
        </h3>
      </header>
      <div class="comment" v-for="comment in comments" :key="comment.id">
        <div class="comment-header d-flex justify-content-between">
          <div class="user d-flex align-items-center">
            <div class="image">
              <img :src="comment.user.avatar" alt="..." class="img-fluid rounded-circle">
            </div>
            <div class="title">
              <strong>{{ comment.user.name }}</strong>
              <span class="date">May 2016</span>
            </div>
          </div>
        </div>
        <div class="comment-body">
          <p>{{ comment.comment }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "comments",
  props: ["post_id"],
  data() {
    return {
      comments: []
      // post:[],
    };
  },
  mounted() {
    axios
      .get("https://fakeblog.bel4.com/api/posts/" + this.post_id + "/comments")
      .then(response => {
        this.comments = response.data.data;
        // response.data.data.forEach(currentItem => {
        //   axios.get("https://fakeblog.bel4.com/api/authors/1/show").then(response1=>{

        //   })

        // });
      });
  }
};
</script>
