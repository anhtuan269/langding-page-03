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
          class="text-150 leading-150 font-bold text-opacity-5 text-rgba relative right-10 md:leading-l-272 md:text-200 md:right-20"
        >
          Rəqəmsal
        </h2>
      </div>
    </div>
    <div class="left relative">
      <img class="w-full" src="@/static/image/hero-baner.png" alt="" />
      <img
        class="absolute top-1/4 left-1/4 transform -translate-x-1/4 -translate-y-16 md:-translate-y-12 md:-translate-x-24"
        src="@/static/image/triangle.png"
        alt=""
      />
    </div>
    <div class="relative -top-5 md:-top-10">
      <Customer class="block md:hidden" />
      <Customer :settings="settings" class="hidden md:block" />
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
  data() {
    return {
      settings: {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        edgeFriction: 0.35,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            },
          },
        ],
      },
    };
  },
};
</script>

<style>
</style>