<template>
  <div class="widget latest-posts">
    <header>
      <h3 class="h6">Popular Posts</h3>
    </header>
    <div class="blog-posts">
      <div href="#" v-for="post in popular_post " :key="post.id">
       <router-link :to="{ name: 'post_detail', params: { id: post.id }}">
      
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
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "popular_post",
  data() {
    return {
      popular_post: []
    };
  },
  mounted() {
    axios.get("https://fakeblog.bel4.com/api/posts/popular").then(response => {
      this.popular_post = response.data.data;
      console.log(this.popular_post);
    });
  }
};
</script>