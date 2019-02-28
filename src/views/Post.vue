<template>
  <div>
    <menu_blog></menu_blog>
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
    <fotter></fotter>
  </div>
</template>

<script>
// @ is an alias to /src

import Post from "@/components/Blog/Post.vue";
import search from "@/components/Blog/search.vue";
import last_post from "@/components/Blog/last_post.vue";
import popular_post from "@/components/Blog/popular.vue";
import categories from "@/components/Blog/categories.vue";
import tags from "@/components/Blog/tags.vue";
import fotter from "@/components/Blog/footer.vue";
import menu_blog from "@/components/Blog/menu.vue";
// import fotter from "@/components/Blog/footer.vue";

export default {
  name: "Posts",
  components: {
    Post,
    search,
    last_post,
    popular_post,
    fotter,
    menu_blog
    // lastpost,
    // categories,
    // tags
  }
};
</script>
