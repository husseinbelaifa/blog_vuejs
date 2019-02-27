<template>
  <div class="widget latest-posts">
    <header>
      <h3 class="h6">Latest Posts</h3>
    </header>
    <div class="blog-posts">
      <a href="#" v-for="post in last_post " :key="post.id">
        <div class="item d-flex align-items-center">
          <div class="image">
            <img :src="post.thumb" alt="..." class="img-fluid">
          </div>
          <div class="title">
            <strong>{{ post.name}}</strong>
            <div class="d-flex align-items-center">
              <div class="views">
                <i class="icon-eye"></i>
                {{ post.hits }}
              </div>
              <div class="comments">
                <i class="icon-comment"></i>
                {{ post.comments_count }}
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "last_post",
  data() {
    return {
      last_post: []
    };
  },
  mounted() {
    axios.get("https://fakeblog.bel4.com/api/posts/featured").then(response => {
      this.last_post = response.data.data;
      console.log(this.last_post);
    });
  }
};
</script>
