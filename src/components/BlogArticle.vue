<template>
  <article class="flex mb-12">
    <div class="w-1/4 py-2 px-8">
      <div
        style="width: 11em;"
        class="flex flex-col justify-center items-center h-48"
      >
        <p style="font-size: 6rem;line-height: 0.8em" class="font-bold">
          25
        </p>
        <small class="mt-6 text-uppercase">June</small>
      </div>
    </div>
    <div class="w-3/4">
      <ul class="inline-flex text-paragraph mb-3 text-red-600">
        <li class="mr-4">#vuejs</li>
        <li class="mx-4">#graphql</li>
        <li class="mx-4">#symfony</li>
      </ul>
      <h1 class="mb-3 font-fira-sans">
        <a class="font-bold" href="#">Discovery of the Mercury Protocol</a>
      </h1>
      <p class="leading-loose text-justify text-paragraph mb-3">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dolorum in
        incidunt maiores nisi sequi, tenetur ullam velit vero voluptatibus!
        Aperiam consequatur ea eveniet odio.
      </p>
      <a class="text-paragraph mb-3 font-bold" href="#">Read more</a>
    </div>
  </article>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ArticleData from "@/types/ArticleData";

@Component
export default class BlogArticle extends Vue {
  @Prop() articleData!: ArticleData;
}
</script>
<style scoped lang="scss">
h1.font-fira-sans {
  font-family: "Fira Sans", sans-serif;
}
</style>
