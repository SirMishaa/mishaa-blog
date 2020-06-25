<template>
  <main>
    <Navbar />
    <MainHeader class="mt-48" />

    <ArticleSection />

    <!-- Todo: Center MainHeader from viewport -->
  </main>
</template>

<script>
import Navbar from "@/components/Navbar";
import MainHeader from "@/components/MainHeader";
import ArticleSection from "@/views/ArticleSection";

export default {
  name: "Home",
  components: { ArticleSection, MainHeader, Navbar }
};
</script>
