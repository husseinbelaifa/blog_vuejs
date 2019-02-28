<template>
  <div class="container">
    <div class="post-single">
      <div class="post-thumbnail">
        <img :src="post.thumb" alt="..." class="img-fluid">
      </div>
      <div class="post-details">
        <div class="post-meta d-flex justify-content-between">
          <div class="category">
            <a href="#">Business</a>
            <a href="#">Financial</a>
          </div>
        </div>
        <h1>
          {{ post.name }}
          <a href="#">
            <i class="fa fa-bookmark-o"></i>
          </a>
        </h1>
        <div class="post-footer d-flex align-items-center flex-column flex-sm-row">
          <a href="#" class="author d-flex align-items-center flex-wrap">
            <div class="avatar">
              <img :src="post.author.avatar" alt="..." class="img-fluid">
            </div>
            <div class="title">
              <span>{{ post.author.name }}</span>
            </div>
          </a>
          <div class="d-flex align-items-center flex-wrap">
            <div class="date">
              <i class="icon-clock"></i> 2 months ago
            </div>
            <div class="views">
              <i class="icon-eye"></i>
              {{ post.hits }}
            </div>
            <div class="comments meta-last">
              <i class="icon-comment"></i>
              {{ post.comments_count }}
            </div>
          </div>
        </div>
        <div class="post-body">
          <p class="lead">{{ post.slug}}</p>
          <p>{{ post.excerpt }}</p>
          <p>
            <img :src="post.thumb" alt="..." class="img-fluid">
          </p>
          <h3>Lorem Ipsum Dolor</h3>
          <p>div Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda temporibus iusto voluptates deleniti similique rerum ducimus sint ex odio saepe. Sapiente quae pariatur ratione quis perspiciatis deleniti accusantium</p>
          <blockquote class="blockquote">
            <p>{{ post.body}}</p>
            <footer class="blockquote-footer">
              Someone famous in
              <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
          <p>quasi nam. Libero dicta eum recusandae, commodi, ad, autem at ea iusto numquam veritatis, officiis. Accusantium optio minus, voluptatem? Quia reprehenderit, veniam quibusdam provident, fugit iusto ullam voluptas neque soluta adipisci ad.</p>
        </div>
        <div class="post-tags">
          <a href="#" class="tag">#Business</a>
          <a href="#" class="tag">#Tricks</a>
          <a href="#" class="tag">#Financial</a>
          <a href="#" class="tag">#Economy</a>
        </div>
        <div
          class="posts-nav d-flex justify-content-between align-items-stretch flex-column flex-md-row"
        >
          <!-- <a href="#" class="prev-post text-left d-flex align-items-center">
            <div class="icon prev">
              <i class="fa fa-angle-left"></i>
            </div>
            <div class="text">
              <strong class="text-primary">Previous Post</strong>
              <h6>I Bought a Wedding Dress.</h6>
            </div>
          </a>-->
          <!-- <a href="#" class="next-post text-right d-flex align-items-center justify-content-end">
            <div class="text">
              <strong class="text-primary">Next Post</strong>
              <h6>I Bought a Wedding Dress.</h6>
            </div>
            <div class="icon next">
              <i class="fa fa-angle-right"></i>
            </div>
          </a>-->
        </div>
        <div class="post-comments">
          <comments :post_id="post_ID"></comments>
        </div>
        <div class="add-comment">
          <header>
            <h3 class="h6">Leave a reply</h3>
          </header>
          <form action="#" class="commenting-form">
            <div class="row">
              <div class="form-group col-md-6">
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Name"
                  class="form-control"
                >
              </div>
              <div class="form-group col-md-6">
                <input
                  type="email"
                  name="username"
                  id="useremail"
                  placeholder="Email Address (will not be published)"
                  class="form-control"
                >
              </div>
              <div class="form-group col-md-12">
                <textarea
                  name="usercomment"
                  id="usercomment"
                  placeholder="Type your comment"
                  class="form-control"
                ></textarea>
              </div>
              <div class="form-group col-md-12">
                <button type="submit" class="btn btn-secondary">Submit Comment</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import comments from "@/components/Blog/comments.vue";
export default {
  name: "post_detail",
  props: ["post_ID"],
  components: {
    comments
  },

  data() {
    return {
      post: {}
    };
  },
  mounted() {
    axios
      .get("https://fakeblog.bel4.com/api/posts/" + this.post_ID + "/show")
      .then(response => {
        this.post = response.data;
        console.log("rsponse");

        console.log(response.data);
        console.log(this.post.author.name);

        // console.log(posts);
      });
  }
};
</script>
