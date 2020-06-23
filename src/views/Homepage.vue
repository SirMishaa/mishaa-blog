<template>
  <div class="h-full">
    <Navbar />
    <MainHeader class="mt-48" />
    <!-- Todo: Center MainHeader from viewport -->
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import MainHeader from "@/components/MainHeader";

export default {
  name: "Home",
  components: { MainHeader, Navbar }
};
</script>
