<template>
  <div class="container">
    <div class="row">
      <!-- Latest Posts -->
      <!-- <main class="post blog-post col-lg-8">
        <post_detail></post_detail>
      </main>
      <aside class="col-lg-4">
        <search></search>
        <last_post></last_post>
        <popular_post></popular_post>
      </aside>-->
    </div>
  </div>
</template>

<script>
import post_detail from "@/components/Blog/post_detail.vue";
import search from "@/components/Blog/search.vue";
import last_post from "@/components/Blog/last_post.vue";
import popular_post from "@/components/Blog/last_post.vue";
import categories from "@/components/Blog/categories.vue";
import tags from "@/components/Blog/tags.vue";
export default {
  name: "post_detail",
  components: {
    post_detail,
    search,
    last_post,
    popular_post
    // lastpost,
    // categories,
    // tags
  }
};
</script>
