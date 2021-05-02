<template>
  <div class="customer relative bg-orange py-16 lg:bg-gray-100 xl:mt-0 lg:py-32 ">
    <div class="bg-orange lg:w-full relative xl:px-10">
        <img class="hidden lg:block lg:absolute lg:top-2/4 transform lg:-translate-y-2/3 lg:-translate-x-12" src="@/static/image/formatlar.png" alt="">
      <div class="bg-white px-8 py-8 xl:w-700 xl:h-400 2xl:w-876 2xl:px-16">
        <h5 class="title text-12 mb-4 text-new-blue xl:w-600 " >MÜŞTƏRİLƏRİMİZ</h5>
        <Heading :head="head" />
        <Heading class="mt-10" :head="head2"/>
      </div>
    </div>
    <div class=" relative mt-20 xl:absolute xl:-top-2/4 xl:transform xl:translate-y-64 xl:right-24 2xl:right-36 2xl:-translate-x-5">
         <SlideCustomer />
    </div>
  </div>
</template>

<script src="./script.js">

</script>

<style>
</style>