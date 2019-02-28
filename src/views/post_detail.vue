<template>
  <div>
    <menu_blog></menu_blog>
    <div class="container">
      <div class="row">
        <main class="post blog-post col-lg-8">
          <post_detail :post_ID="$route.params.id"></post_detail>
        </main>
        <aside class="col-lg-4">
          <search></search>
          <last_post></last_post>
          <popular_post></popular_post>
        </aside>
      </div>
    </div>
  </div>
</template>


<script>
import post_detail from "@/components/Blog/post_detail.vue";

import search from "@/components/Blog/search.vue";
import last_post from "@/components/Blog/last_post.vue";
import popular_post from "@/components/Blog/popular.vue";
import categories from "@/components/Blog/categories.vue";
import tags from "@/components/Blog/tags.vue";
import fotter from "@/components/Blog/footer.vue";
import menu_blog from "@/components/Blog/menu.vue";
export default {
  name: "postdetail",
  components: {
    post_detail,
    search,
    last_post,
    popular_post,
    // lastpost,
    categories,
    tags,
    menu_blog
  }
};
</script>
