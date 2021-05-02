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