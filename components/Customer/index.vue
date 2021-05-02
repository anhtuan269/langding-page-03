<template>
  <ul class="bg-white px-16 grid grid-cols-2 gap-x-6 gap-y-6 py-8 shadow-3xl border-2 rounded-xl">
    <li v-for="(item, index) in customer" :key="index">
      <img :src="item.src" alt="" />
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    customer: {
      type: Array,
      require: true,
      default() {
        return [
          {
            id: 1,
            src: "/image/customer-1.png",
          },
          {
            id: 2,
            src: "/image/customer-2.png",
          },
          {
            id: 3,
            src: "/image/customer-3.png",
          },
          {
            id: 4,
            src: "/image/customer-4.png",
          },
        ];
      },
    },
  },
};
</script>

<style></style>
