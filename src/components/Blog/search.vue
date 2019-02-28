<template>
  <div class="widget search">
    <header>
      <h3 class="h6">Search the blog</h3>
    </header>

    <div class="form-group">
      <input @keypress.enter="changed" type="search" placeholder="What are you looking for?">
      <button type="submit" class="submit">
        <i class="icon-search"></i>
      </button>
    </div>
  </div>
</template>

<script>
import { store } from "@/store.js";
import axios from "axios";
export default {
  name: "search",
  store,
  methods: {
    changed(event) {
      this.$store.commit("change", event.target.value);
      if (this.$store.getters.search.trim() === "") {
        this.$store.commit("change_url","http://fakeblog.bel4.com/api/posts");
        axios
          .get("http://fakeblog.bel4.com/api/posts?page=1")
          .then(response => {
            this.$store.commit("change_post", response.data);
            console.log("vide");
          });
      } else {
        /*get list of authors*/
       
        axios.get("https://fakeblog.bel4.com/api/authors").then(response => {
          response.data.data.forEach(currentItem => {
            if (currentItem.name === this.$store.getters.search.trim()) {
               this.$store.commit("change_url","https://fakeblog.bel4.com/api/authors/" +
                    currentItem.id +
                    "/posts");
              axios
                .get(
                  "https://fakeblog.bel4.com/api/authors/" +
                    currentItem.id +
                    "/posts?page=1"
                )
                .then(response1 => {
                  this.$store.commit("change_post", response1.data);
                });
            } else {
              this.$store.commit("change_post", {});
              console.log("vide");
            }
          });
        });
      }
    }
  }
};
</script>
