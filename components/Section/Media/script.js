import Heading from "@/components/Heading";
export default {
  name: "media",
  components: {
    Heading,
  },
  data() {
    return {
      head: {
        big: false,
        normal: true,
        title: false,
        custom: false,
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
       head1: {
        big: false,
        normal: false,
        title: false,
        custom: false,
        small: false,
        technology: true,
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper magna sapien",
        technology_title: "İnternet",
      },
       head2: {
        big: false,
        normal: false,
        title: false,
        custom: false,
        small: false,
        technology: true,
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper magna sapien",
        technology_title: "LED Monitor",
      },
       head3: {
        big: false,
        normal: false,
        title: false,
        custom: false,
        small: false,
        technology: true,
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper magna sapien",
        technology_title: "Mobil reklam",
      },
       head4: {
        big: false,
        normal: false,
        title: false,
        custom: false,
        small: false,
        technology: true,
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper magna sapien",
        technology_title: "PR Reklam",
      },
      
    };
  },
};