<template>
  <div></div>
</template>

<script>
export default {
  name: "comments",
  props: ["post_id"],
  data() {
    return {
      comments: []
    };
  },
  mounted() {
    axios
      .get("https://fakeblog.bel4.com/api/posts/" + this.post_id + "/comments")
      .then(response => {
        this.comments = response.data.data;
      });
  }
};
</script>
