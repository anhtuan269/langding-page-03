<template>
  <div class="flex justify-between items-center">
    <div class="block">
      <nuxt-link to="/">
        <img class="w-full" src="@/static/image/logo.png" alt="" />
      </nuxt-link>
    </div>
    <ul class="  hidden md:flex item-center justify-between">
      <li 
      v-for="(item, index) in menu " 
      :key="index"
      class="ml-10 hover:text-orange "
      >
        <nuxt-link :to="item.link">
           {{item.page}}
        </nuxt-link>
      </li>
    </ul>
    <div class="border-2 bg-purple p4 text-white font-bold uppercase p-2 text-14 cursor-pointer hover:bg-orange hover:text-white duration-500 ease-in-out md:hidden">
        menyu
    </div>
  </div>
</template>

<script src="./script.js">

</script>

<style>
a.nuxt-link-exact-active {
  color:#F48F38;
}
</style>
