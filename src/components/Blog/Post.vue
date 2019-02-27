<template>
  <div class="container">
    <div class="row">
      <div class="col-xl-6" v-for="post in posts " :key="post.id">
        <div class="post-thumbnail">
          <a href="post.html">
            <img :src="post.thumb" alt="..." class="img-fluid">
          </a>
        </div>
        <div class="post-details">
          <div class="post-meta d-flex justify-content-between">
            <div class="date meta-last">{{ post.published_at }}</div>
            <div class="category">
              <a href="#">{{ post.categories }}</a>
            </div>
          </div>
          <a href="post.html">
            <h3 class="h4">{{ post.name }}</h3>
          </a>
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
    </div>
  </div>
</template>

<script>
import "@/assets/vendor/bootstrap/css/bootstrap.min.css";
import axios from "axios";
// import "@/assets/vendor/font-awesome/css/font-awesome.min.css";
// import "@/assets/css/fontastic.css";
// import "@/assets/https://fonts.googleapis.com/css?family=Open+Sans:300,400,700";
// import "@/assets/vendor/@fancyapps/fancybox/jquery.fancybox.min.css";
// import "@/assets/css/style.default.css";
// import "@/assets/vendor/css/custom.css";

export default {
  name: "Post",
  data() {
    return {
      posts: []
    };
  },
  mounted() {
    console.log("mounted");
    axios.get("https://fakeblog.bel4.com/api/posts").then(response => {
      // this.posts = response.data.data;
      // console.log(response.data.data);
      // response.data.data.forEach(element => {
      //   // this.posts.push(element);
      //   console.log(posts);
      // });
      this.posts = response.data.data;
      console.log(this.posts);
      // console.log(response.data.data);
    });
  }
};
</script>
