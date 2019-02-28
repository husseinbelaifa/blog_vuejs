
<template>
  <div class="home">
    <menu_blog></menu_blog>
    <page_section></page_section>

    <last></last>
    <populaire></populaire>
    <fotter></fotter>
  </div>
</template>

<script>
// @ is an alias to /src
import fotter from "@/components/Blog/footer.vue";
import menu_blog from "@/components/Blog/menu.vue";
import page_section from "@/components/Blog/page_section.vue";
import last from "@/components/Blog/last_three.vue";
import populaire from "@/components/Blog/popular_three.vue";
import axios from "axios";
export default {
  name: "home",
  components: {
    fotter,
    menu_blog,
    page_section,
    last,
    populaire
    // lastpost,
    // categories,
    // tags
  }
};
</script>
