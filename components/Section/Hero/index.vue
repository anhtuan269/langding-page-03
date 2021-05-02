<template>
  <div
    class="flex flex-col relative pt-5 overflow-x-hidden overflow-y-visible mb-10"
  >
    <div class="right">
      <Header />
      <div class="my-10">
        <Heading />
      </div>
      <button
        class="button bg-purple py-4 px-8 font-bold text-white inline-block rounded-3xl hover:bg-orange hover:text-purple-800 duration-500 ease-linear"
      >
        İşlərimizlə tanış ol
      </button>
      <div class="relative">
        <h2
          class="text-150 leading-150 font-bold text-opacity-5 text-rgba relative right-10 md:leading-l-272 md:text-200"
        >
          Rəqəmsal
        </h2>
      </div>
    </div>
    <div class="left">
      <img src="@/static/image/hero-baner.png" alt="" />
    </div>
    <div class="relative -top-5">
      <Customer />
    </div>
  </div>
</template>

<script>
import Customer from "@/components/Customer";
import Header from "@/components/Header";
import Heading from "@/components/Heading";
export default {
  name: "Hero",
  components: {
    Heading,
    Header,
    Customer,
  },
};
</script>

<style>
</style>