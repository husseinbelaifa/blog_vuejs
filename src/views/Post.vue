<template>
  <div class="container">
    <div class="row">
      <main class="posts-listing col-lg-8">
        <Post/>
      </main>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import "@/assets/vendor/bootstrap/css/bootstrap.min.css";
// import "@/assets/vendor/font-awesome/css/font-awesome.min.css";
// import "@/assets/css/fontastic.css";
// import "@/assets/https://fonts.googleapis.com/css?family=Open+Sans:300,400,700";
// import "@/assets/vendor/@fancyapps/fancybox/jquery.fancybox.min.css";
// import "@/assets/css/style.default.css";
// import "@/assets/vendor/css/custom.css";

import Post from "@/components/Blog/Post.vue";

export default {
  name: "Posts",
  components: {
    Post
  }
};
</script>
