<template>
  <div class="container">
    <div class="row">
      <main class="posts-listing col-lg-8">
        <Post/>
      </main>
      <aside class="col-lg-4">
        <search></search>
        <last_post></last_post>
        <popular_post></popular_post>
      </aside>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import Post from "@/components/Blog/Post.vue";
import search from "@/components/Blog/search.vue";
import last_post from "@/components/Blog/last_post.vue";
import popular_post from "@/components/Blog/last_post.vue";
import categories from "@/components/Blog/categories.vue";
import tags from "@/components/Blog/tags.vue";
export default {
  name: "Posts",
  components: {
    Post,
    search,
    last_post,
    popular_post
    // lastpost,
    // categories,
    // tags
  }
};
</script>
