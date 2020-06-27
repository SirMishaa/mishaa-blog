<template>
  <div>
    <Navbar />
    <div class="w-5/6 sm:w-5/6 md:w-5/6 lg:w-4/5 xl:w-3/5 mx-auto mt-32">
      <div
        class="w-full sm:w-full md:w-full lg:w-4/5 xl-w-4/5 flex mx-auto rounded shadow-2xl"
      >
        <div class="w-1/2 hidden sm:hidden md:block lg:block xl:block">
          <img
            class="block w-full h-full"
            src="../assets/space_login.jpg"
            alt="Space Illustration "
          />
        </div>
        <div class="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 p-10">
          <div class="flex justify-center">
            <img
              src="../assets/login_space_1.jpg"
              class="rounded-full h-24 w-24"
              alt="Space logo illustration"
            />
          </div>

          <h2
            class="text-2xl text-center font-medium mt-8 mb-6 tracking-wider uppercase"
          >
            Login to your account
          </h2>
          <input
            class="bg-gray-200 my-5 appearance-none border-2 border-gray-200 w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black"
            type="email"
            placeholder="Username"
          />
          <input
            class="bg-gray-200 mt-5 mb-3 appearance-none border-2 border-gray-200 w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black"
            type="password"
            placeholder="Password"
          />

          <div class="flex items-center justify-center my-4">
            <div
              style="border: 2px solid rgb(25, 25, 25)"
              class="rounded-full h-12 w-12 shadow flex justify-center items-center"
            >
              <i class="fas fa-fingerprint fa-2x"></i>
            </div>
            <p class="mx-4">
              Dual-factor authentication enabled
            </p>
          </div>

          <div class="block text-center mt-10 mb-2">
            <a
              href="#"
              style="background: #051525"
              class="py-4 px-6 text-center text-white font-bold block hover:opacity-75"
              >Let me in !</a
            >
          </div>
          <a href="#" class="text-sm text-center block hover:underline"
            >Forgotten password</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Navbar from "@/components/Navbar.vue";
export default {
  name: "Login",
  components: { Navbar }
};
</script>

<style scoped></style>
