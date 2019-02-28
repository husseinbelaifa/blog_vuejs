<template>
  <div>
    <section class="featured-posts no-padding-top">
      <div class="container">
        <header>
          <h2>Populaire from the blog</h2>
          <p class="text-big">{{ post1.name }}</p>
        </header>
        <div class="row">
          <div class="post col-md-4">
            <div class="post-thumbnail">
              <router-link :to="{ name: 'post_detail', params: { id: post1.id }}">
                <img :src="post1.thumb" alt="..." class="img-fluid">
              </router-link>
            </div>
            <div class="post-details">
              <div class="post-meta d-flex justify-content-between">
                <div class="date">20 May | 2016</div>
                <div class="category">
                  <a href="#">Business</a>
                </div>
              </div>
              <router-link :to="{ name: 'post_detail', params: { id: post1.id }}">
                <h3 class="h4">{{ post1.name}}</h3>
              </router-link>
              <p class="text-muted">{{ post1.slug }}</p>
            </div>
          </div>

          <div class="post col-md-4">
            <div class="post-thumbnail">
              <router-link :to="{ name: 'post_detail', params: { id: post2.id }}">
                <img :src="post2.thumb" alt="..." class="img-fluid">
              </router-link>
            </div>
            <div class="post-details">
              <div class="post-meta d-flex justify-content-between">
                <div class="date">20 May | 2016</div>
                <div class="category">
                  <a href="#">Business</a>
                </div>
              </div>
              <router-link :to="{ name: 'post_detail', params: { id: post2.id }}">
                <h3 class="h4">{{ post2.name}}</h3>
              </router-link>
              <p class="text-muted">{{ post2.slug }}</p>
            </div>
          </div>

          <div class="post col-md-4">
            <div class="post-thumbnail">
              <router-link :to="{ name: 'post_detail', params: { id: post3.id }}">
                <img :src="post3.thumb" alt="..." class="img-fluid">
              </router-link>
            </div>
            <div class="post-details">
              <div class="post-meta d-flex justify-content-between">
                <div class="date">20 May | 2016</div>
                <div class="category">
                  <a href="#">Business</a>
                </div>
              </div>
              <router-link :to="{ name: 'post_detail', params: { id: post3.id }}">
                <h3 class="h4">{{ post3.name}}</h3>
              </router-link>
              <p class="text-muted">{{ post3.slug }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "popular_post",
  data() {
    return {
      post1: {},
      post2: {},
      post3: {}
    };
  },
  mounted() {
    axios.get("https://fakeblog.bel4.com/api/posts/popular").then(response => {
      var i = 0;

      response.data.data.forEach(element => {
        if (i === 0) this.post1 = element;
        if (i === 1) this.post2 = element;
        if (i === 2) this.post3 = element;
        i++;
      });
    });
  }
};
</script>