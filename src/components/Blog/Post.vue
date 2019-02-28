<template>
  <div class="container">
    <div class="row">
      <!-- <paginate name="posts" :list="posts" :per="2"> -->
      <div class="post col-xl-6" v-for="post in $store.state.posts.data " :key="post.id">
        <div class="post-thumbnail">
          <router-link :to="{ name: 'post_detail', params: { id: post.id }}">
            <!-- <a href="post.html"> -->
            <img :src="post.thumb" alt="..." class="img-fluid">
          </router-link>
        </div>
        <div class="post-details">
          <div class="post-meta d-flex justify-content-between">
            <div class="date meta-last">{{ post.published_at }}</div>
            <div class="category">
              <!-- <a href="#">{{ post.categories }}</a> -->
            </div>
          </div>
          <router-link :to="{ name: 'post_detail', params: { id: post.id }}">
            <h3 class="h4">{{ post.name }}</h3>
          </router-link>
          <p
            class="text-muted"
          >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
          <footer class="post-footer d-flex align-items-center">
            <a href="#" class="author d-flex align-items-center flex-wrap">
              <div class="avatar">
                <img :src=" post.author.avatar" alt="..." class="img-fluid">
              </div>
              <div class="title">
                <span>{{ post.author.name }}</span>
              </div>
            </a>
            <div class="date">
              <i class="icon-clock"></i> 2 months ago
            </div>
            <div class="comments meta-last">
              <i class="icon-comment"></i>
              {{ post.comments_count }}
            </div>
          </footer>
        </div>
      </div>

      <pagination :data="$store.state.posts" :limit="16" @pagination-change-page="getResults"></pagination>
    </div>
  </div>
</template>

 

<script>
import axios from "axios";
import pagination from "laravel-vue-pagination";
import { store } from "@/store.js";
export default {
  name: "Post",
  store,
  components: { pagination },
  data() {
    return {
      posts: {}
    };
  },
  mounted() {
    console.log("mounted");
    // axios.get("https://fakeblog.bel4.com/api/posts").then(response => {
    //   this.posts = response.data.data;
    //   console.log(this.posts);
    // });
    this.getResults();
  },
  methods: {
    // Our method to GET results from a Laravel endpoint
    getResults(page = 1) {
      let url =
        this.$store.state.url === ""
          ? "https://fakeblog.bel4.com/api/posts?page="
          : this.$store.state.url + "?page=";
      axios.get(url + page).then(response => {
        // if (page == 1)
        this.$store.commit("change_post", response.data);
      });
    }
  }
};
</script>
