<template>
  <div
    :class="containerClasses"
    class="w-full sm:w-full md:w-4/5 lg:w-3/5 xl:w-3/5 mx-auto mt-32"
  >
    <slot></slot>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class Container extends Vue {
  @Prop() debug!: boolean;

  // Todo : Rework component, we should be able to specify size for differents size of screen
  get containerClasses(): string | null {
    return this.$props.debug ? "border border-red-500" : null;
  }
}
</script>
