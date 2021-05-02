<template>
  <div
    class="flex flex-col relative pt-5 overflow-x-hidden overflow-y-visible mb-10 xl:flex-row justify-between xl:pt-0 xl:px-10"
  >
    <div class="right md:w-6/12 xl:pt-10">
      <Header />
      <div class="my-10">
        <Heading />
      </div>
      <button
        class="button bg-purple py-4 px-8 font-bold text-white inline-block rounded-3xl hover:bg-orange hover:text-purple-800 duration-500 ease-linear"
      >
        İşlərimizlə tanış ol
      </button>
      <div class="relative overflow-x-hidden">
        <h2
          class="text-150 leading-150 font-bold text-opacity-5 text-rgba relative right-10 md:leading-l-272 md:text-200 md:right-20"
        >
          Rəqəmsal
        </h2>
      </div>
    </div>
    <div class="left relative xl:w-5/12">
      <img class="w-full" src="@/static/image/hero-baner.png" alt="" />
      <img
        class="absolute top-1/4 left-1/4 transform -translate-x-1/4 -translate-y-16 md:-translate-y-12 md:-translate-x-24 xl:-translate-y-1/4 xl:-translate-x-1/4"
        src="@/static/image/triangle.png"
        alt=""
      />
      <div class="relative -top-5 md:-top-10  xl:right-100 ">
        <Customer class="block md:hidden" />
        <Customer :settings="settings" class="hidden md:block " />
      </div>
    </div>
  </div>
</template>

<script src="./script.js">

</script>

<style>
</style>