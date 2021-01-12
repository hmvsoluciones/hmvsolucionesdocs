<template>
  <div class="post-container" v-if="posts.length">
    <div class="post" v-for="post in posts">      
      <router-link :to="post.path">
        <h2>{{post.frontmatter.title}}</h2>
        <div class="post-card">          
          <img  class="article-image" v-if="post.frontmatter.image" :src="$withBase(post.frontmatter.image)" alt="">
        </div>        
        <div class="description">{{post.frontmatter.description}}</div>
        <span>{{post.frontmatter.date}}</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["page"],
  computed: {
    posts() {
      let currentPage = this.page ? this.page : this.$page.path;
      let posts = this.$site.pages
        .filter(x => {
          return x.path.match(new RegExp(`(${currentPage})(?=.*html)`));
        })
        .sort((a, b) => {
          return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
        });
      return posts;
    }
  }
};
</script>
<style scoped>
.post-container {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  border: 1px solid #46BD87;
}
.post-card {
  width: 100%;
  height: 150px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 10px;
  display: flex;
  align-items: center;
}
.article-image {
  height: 100%;
}
.description {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>