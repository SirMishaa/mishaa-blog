<template>
  <div>
    <Container>
      <h1 class="font-medium custom text-red-500 ml-6 inline">
        Latest Articles
      </h1>
      <Article
        :article-data="article"
        :key="article.slug"
        v-for="article in retrievedArticles"
      />
    </Container>
  </div>
</template>
<script lang="ts">
import Container from "@/components/Container.vue";
import Article from "@/components/BlogArticle.vue";
import ArticleData from "@/types/ArticleData";

export default {
  name: "ArticleSection",
  components: { Article, Container },
  computed: {
    retrievedArticles(): Array<ArticleData> {
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
