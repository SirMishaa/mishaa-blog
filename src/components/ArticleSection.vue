<template>
  <div>
    <Container>
      <h1 class="font-medium custom text-red-500 ml-6 inline">
        Latest Articles
      </h1>
      <BlogArticle />
      <BlogArticle />
    </Container>
  </div>
</template>
<script>
import Container from "@/components/Container";
import BlogArticle from "@/components/BlogArticle";

export default {
  name: "ArticleSection",
  components: { BlogArticle, Container },
  computed: {
    retrievedArticles() {
      return this.$store.state.retrievedArticles;
    }
  },
  mounted() {
    this.$store.commit("getArticlesFromDatabase");
  }
};
</script>

<style scoped lang="scss">
h1.custom,
.custom-hr {
  font-family: "Fira Sans", sans-serif;
  letter-spacing: 0.15em;
}
</style>
