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
        rows: 2,
      },
    };
  },
};