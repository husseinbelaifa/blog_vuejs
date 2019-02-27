<template>
  <div class="container">
    <div class="row">
      <ul class="post col-xl-6" v-for="post in posts">
        <div class="post-thumbnail">
          <a href="post.html">
            <img src="img/blog-post-1.jpeg" alt="..." class="img-fluid">
          </a>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import "@/assets/vendor/bootstrap/css/bootstrap.min.css";
import "@/assets/vendor/font-awesome/css/font-awesome.min.css";
import "@/assets/css/fontastic.css";
import "@/assets/https://fonts.googleapis.com/css?family=Open+Sans:300,400,700";
import "@/assets/vendor/@fancyapps/fancybox/jquery.fancybox.min.css";
import "@/assets/css/style.default.cs";
import "@/assets/vendor/css/custom.css";

export default {
  name: "Post",
  data() {
    return {
      posts: null
    };
  },
  mounted() {
    axios.get("https://fakeblog.bel4.com/api/posts").then(function(response) {
      this.posts = response.data;
    });
  }
};
</script>
