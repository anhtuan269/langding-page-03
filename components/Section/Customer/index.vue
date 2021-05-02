<template>
  <div class="customer relative bg-orange py-16">
    <div class="bg-orange">
        <img class="hidden" src="@/static/image/formatlar.png" alt="">
      <div class="bg-white px-8 py-8">
        <h5 class="title text-12 mb-4 text-new-blue">MÜŞTƏRİLƏRİMİZ</h5>
        <Heading :head="head" />
        <Heading class="mt-10" :head="head2"/>
      </div>
    </div>
    <div class="mt-20">
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