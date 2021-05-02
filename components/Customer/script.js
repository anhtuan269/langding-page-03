import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  components: {
    VueSlickCarousel,
  },
  data() {
    return {};
  },
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
        ];
      },
    },
    settings: {
      type: Object,
      require: true,
      default() {
        return {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          edgeFriction: 0.35,
          slidesToScroll: 1,
          centerPadding: "30px",
          rows: 2,
          slidesPerRow: 1,
          responsive: [
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
              }
            },
          ],
        };
      },
    },
  },
};