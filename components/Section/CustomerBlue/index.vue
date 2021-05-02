<template>
  <div class="customer bg-blue py-16">
    <CustomerSlide :blue="blue" :orange="orange" />
    <div class="bg-white mt-16 ">
    <h5 class="text-12 text-new-blue font-semibold pt-8 ml-12">PARTNYORLARIMIZ</h5>
      <div class="pt-4 ml-12">
        <Heading :head="head" />
      </div>
      <Customer :settings="settings" />
    </div>
  </div>
</template>

<script>
import CustomerSlide from "@/components/CustomerSlide";
export default {
  name: "blue",
  components: {
    CustomerSlide,
  },
  data() {
    return {
      blue: true,
      orange: false,
      head: {
        big: false,
        title: true,
        normal_title: "Saytlarımız",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper magna sapien ",
      },
      settings: {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        edgeFriction: 0.35,
        slidesToScroll: 1,
        rows:2
      }
    };
  },
};
</script>

<style>
</style>