<template>
  <!-- <ul class="bg-white px-16 grid grid-cols-2 gap-x-6 gap-y-6 py-8 shadow-3xl border-2 rounded-xl">
    <li v-for="(item, index) in customer" :key="index">
      <img :src="item.src" alt="" />
    </li>
  </ul> -->
  <div class="bg-white px-8 shadow-3xl boder-2 rounded-xl pt-8 md:pt-16 md:pb-8 xl:w-876 xl:h-160 xl:px-10">
    <VueSlickCarousel v-bind="settings">
      <div  v-for="(item, index) in customer" :key="index" class="img ml-5 mb-5  ">
        <img :src="item.src" alt="" />
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script src="./script.js">

</script>

<style></style>
