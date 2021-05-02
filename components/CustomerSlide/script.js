import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "customSlide",
  components: {
    VueSlickCarousel,
  },
  props: {
    orange: {
      type:Boolean,
      require:true,
      default () {
        return true
      }
    },
       blue: {
      type:Boolean,
      require:true,
      default () {
        return false
      }
    },
  },
  data() {
    return {
      setting: {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        edgeFriction: 0.35,
        slidesToScroll: 1,
        dotsClass: "hidden",
        arrows: false,
        centerPadding: "10px",
        responsive: [
          {
            breakpoint: 480,
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          },
          {
            breakpoint: 1920,
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          },
        ],
      },
      slides: [
        {
          id: 1,
          item: "/image/slide.png",
          customer: "/image/sign.png",
        },
        {
          id: 2,
          item: "/image/slide-2.png",
          customer: "/image/customer-3.png",
        },
      ],
      
    };
  },
  methods: {
    showPrev() {
      this.$refs.carousel.prev();
    },
    showNext() {
      this.$refs.carousel.next();
    },
  },
};