<template>
  <Container>
    <h1 class="font-medium custom text-red-500 ml-6 inline">
      Leatest Articles
    </h1>

    <BlogArticle />
    <BlogArticle />
  </Container>
</template>
<script>
import Container from "@/components/Container";
import BlogArticle from "@/views/BlogArticle";

export default {
  name: "ArticleSection",
  components: { BlogArticle, Container }
};
</script>

<style scoped lang="scss">
h1.custom,
.custom-hr {
  font-family: "Fira Sans", sans-serif;
  letter-spacing: 0.15em;
}
</style>
