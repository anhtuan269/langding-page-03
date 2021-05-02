import Heading from "@/components/Heading";

import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  name: "formart",
  components: {
    VueSlickCarousel,
    Heading,
  },
  data() {
    return {
      head5: {
        big: false,
        normal: true,
        title: false,
        custom: false,
        small: false,
        technology: false,
        big_title: "Tez və şəffaf reklam xidməti",
        normal_title: "Formatlar",
        logo: "/image/sign.png",
        small_title: "",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper magna sapien",
        small_title: "Standart banner",
        technology_title: "İnternet",
      },
      settings: {
        dots: false,
        arrows: false,
        slidesToShow: 3,
        vertical: true,
        style: {
          height: "100%",
        },
        slidesToScroll: 1,
        paddingCenter: "20px",
      },
      head: {
        big: false,
        small: true,
        small_title: "Standart banner",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper magna sapien",
      },
      head1: {
        big: false,
        small: true,
        small_title: "Video banner",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper magna sapien",
      },
      head2: {
        big: false,
        small: true,
        small_title: "3d banner",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper magna sapien",
      },
      head3: {
        big: false,
        small: true,
        small_title: "image banner",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper magna sapien",
      },
      blue: true,
      orange: false,
    };
  },
  methods: {
    showNext() {
      this.$refs.carousel.next();
    },
  },
};