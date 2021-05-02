<template>
  <div class="customer">
    <CustomerSlide :blue="blue" :orange="orange" />
    <div class="bg-blue">
      <h5>PARTNYORLARIMIZ</h5>
      <Heading :head="head" />
      <Customer :customer="customer" />
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
      customer : [
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
           {
            id: 5,
            src: "/image/customer-5.png",
          },
          {
            id: 6,
            src: "/image/customer-6.png",
          },
          {
            id: 7,
            src: "/image/customer-7.png",
          },
          {
            id: 8,
            src: "/image/customer-8.png",
          },
      ]
    };
  },
};
</script>

<style>
</style>