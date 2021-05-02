<template>
  <div class="flex justify-between items-center">
    <div class="block">
      <nuxt-link to="/">
        <img src="@/static/image/logo.png" alt="" />
      </nuxt-link>
    </div>
    <ul class="md:flex item-center justify-between hidden">
      <li 
      v-for="(item, index) in menu " 
      :key="index"
      class=""
      >
        <nuxt-link to="">
           {{item.page}}
        </nuxt-link>
      </li>
    </ul>
    <div class="border-2 bg-purple p4 text-white font-bold uppercase p-2 text-14 cursor-pointer hover:bg-orange hover:text-white duration-500 ease-in-out">
        menyu
    </div>
  </div>
</template>

<script>
export default {
  props: {
    menu: {
      type: Array,
      require: true,
      default() {
        return [
          {
            id: 1,
            page: 'XİDMƏTLƏR',
          },
          {
            id: 2,
            page: 'HAQQIMIZDA',
          },
          {
            id: 3,
            page: 'ƏLAQƏ',
          },
        ];
      },
    },
  },
};
</script>

<style></style>
