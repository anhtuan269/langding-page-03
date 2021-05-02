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