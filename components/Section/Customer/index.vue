<template>
  <div class="customer relative bg-orange py-16 lg:bg-gray-100 xl:mt-20 lg:py-32 ">
    <div class="bg-orange lg:w-full relative xl:px-10">
        <img class="hidden lg:block lg:absolute lg:top-2/4 transform lg:-translate-y-2/3 lg:-translate-x-12" src="@/static/image/formatlar.png" alt="">
      <div class="bg-white px-8 py-8 lg:w-700 lg:h-400">
        <h5 class="title text-12 mb-4 text-new-blue w-600">MÜŞTƏRİLƏRİMİZ</h5>
        <Heading :head="head" />
        <Heading class="mt-10" :head="head2"/>
      </div>
    </div>
    <div class="mt-20 xl:absolute xl:-top-2/4 xl:transform xl:translate-y-64 xl:right-24">
         <SlideCustomer />
    </div>
  </div>
</template>

<script>
import SlideCustomer from '@/components/CustomerSlide'
import Heading from "@/components/Heading";
export default {
  name: "Customer",
  components: {
    Heading,
    SlideCustomer
  },
  data() {
    return {
      head: {
        big: false,
        normal: false,
        title: true,
        custom: false,
        small: false,
        technology: false,
        big_title: "Tez və şəffaf reklam xidməti",
        normal_title: "Son işlərimiz",
        logo: "/image/sign.png",
        small_title: "",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper magna sapien",
        small_title: "Standart banner",
        technology_title: "İnternet",
      },
      head2: {
        big: false,
        normal: false,
        title: false,
        custom: true,
        small: false,
        technology: false,
        big_title: "Tez və şəffaf reklam xidməti",
        normal_title: "Reklam imkanları",
        logo: "/image/sign.png",
        small_title: "",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper magna sapien",
        small_title: "Standart banner",
        technology_title: "İnternet",
      },
    };
  },
};
</script>

<style>
</style>