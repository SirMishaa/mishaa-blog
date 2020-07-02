<template>
  <main>
    <Navbar />
    <MainHeader class="mt-32" />
    <ArticleSection />

    <!-- Todo: Center MainHeader from viewport -->
  </main>
</template>

<script lang="ts">
import ArticleSection from "@/components/ArticleSection.vue";
import MainHeader from "@/components/MainHeader.vue";
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Home",
  components: { ArticleSection, MainHeader, Navbar },
  mounted() {
    const r = Intl.DateTimeFormat("en", {
      month: "short"
    }).format(new Date());
    console.log(r);
  }
};
</script>
