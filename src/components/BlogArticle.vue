<template>
  <article class="flex mb-12" v-on:click="handleClickArticle">
    <div class="w-1/4 py-2 px-8">
      <div
        style="width: 11em;"
        class="flex flex-col justify-center items-center h-48"
      >
        <p style="font-size: 6rem;line-height: 0.8em" class="font-bold">
          {{ formatDate("d") }}
        </p>
        <small class="mt-6 text-uppercase">{{ formatDate("m") }}</small>
      </div>
    </div>
    <div class="w-3/4">
      <ul class="inline-flex text-paragraph mb-3 text-red-600">
        <li :key="tag" class="mr-4" v-for="tag in articleData.tags">
          <p>{{ tag }}</p>
        </li>
      </ul>
      <h1 class="mb-3 font-fira-sans">
        <a class="font-bold" href="#">{{ articleData.title }}</a>
      </h1>
      <p class="leading-loose text-justify text-paragraph mb-3">
        {{ articleData.resume }}
      </p>
      <a :href="articleData.linkedTo" class="text-paragraph mb-3 font-bold"
        >Read more</a
      >
    </div>
  </article>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ArticleData from "@/types/ArticleData";

@Component
export default class Article extends Vue {
  @Prop() articleData!: ArticleData;

  handleClickArticle() {
    this.$router.push({
      name: "Login"
    });
  }

  /**
   * Format the date properly (return day by default)
   * @param {string} choice
   * @return {number}
   */
  formatDate(choice = "d"): number | string {
    return choice === "d"
      ? new Date(this.articleData.publishedAt).getDate()
      : Intl.DateTimeFormat("en", {
          month: "short"
        }).format(new Date(this.articleData.publishedAt));
  }
}
</script>
<style scoped lang="scss">
h1.font-fira-sans {
  font-family: "Fira Sans", sans-serif;
}

article {
  cursor: pointer;
}
</style>
