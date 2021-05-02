<template>
  <div class="formart relative mt-16 py-16 text-center xl:px-10">
    <div class="title">
      <p class="text-12">
        <span class="text-12 text-new-blue">RƏQƏMSAL</span>
        · MEDİA
      </p>
    </div>
    <Heading :head="head5" />
    <div
      class="flex flex-col items-center justify-center text-left mt-10 xl:flex-row "
    >
      <img class=" w-full xl:w-7/12" src="@/static/image/image.png" alt="" />
      <div class=" w-full xl:w-4/12 z-50 ">
        <div class="slide mt-20 ">
          <VueSlickCarousel v-bind="settings" ref="carousel">
            <div
              class="bg-white inline-block py-4 pl-10 border-l-4 border-red mb-10 xl:mb-5 rounded-tr-20 rounded-br-20  md:py-8"
            >
              <Heading :head="head" />
            </div>
            <div
              class="bg-white inline-block py-4 pl-10 border-l-4 border-blue mb-10 xl:mb-5 md:py-8 rounded-tr-20 rounded-br-20"
            >
              <Heading :head="head1" />
            </div>
            <div
              class="bg-white inline-block py-4 pl-10 border-l-4 border-orange mb-10 xl:mb-5 md:py-8 rounded-tr-20 rounded-br-20"
            >
              <Heading :head="head2" />
            </div>
            <div 
              class="bg-white inline-block py-4 pl-10 border-l-4 border-blue mb-10 xl:mb-5 md:py-8 rounded-tr-20 rounded-br-20"
            >
              <Heading :head="head3" />
            </div>
          </VueSlickCarousel>
        </div>
        <button
          @click="showNext"
          class=" mt-5 focus:outline-none mx-auto flex justify-center "
        >
          <svg
            width="26"
            height="15"
            viewBox="0 0 26 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.5017 15C12.1729 15.0019 11.8469 14.9388 11.5426 14.8145C11.2382 14.6902 10.9613 14.507 10.7279 14.2755L0.734726 4.2823C0.501789 4.04936 0.317014 3.77282 0.19095 3.46848C0.0648853 3.16413 4.90878e-09 2.83793 0 2.50851C-4.90878e-09 2.17909 0.0648853 1.85289 0.19095 1.54854C0.317014 1.2442 0.501789 0.967662 0.734726 0.734725C0.967663 0.501788 1.2442 0.317012 1.54855 0.190947C1.85289 0.0648829 2.17909 -4.90877e-09 2.50851 0C2.83793 4.90878e-09 3.16413 0.0648829 3.46848 0.190947C3.77283 0.317012 4.04936 0.501788 4.2823 0.734725L12.5017 9.00406L20.746 1.0595C20.9758 0.803953 21.2559 0.598572 21.5687 0.456204C21.8816 0.313837 22.2204 0.237546 22.564 0.232101C22.9077 0.226657 23.2488 0.292175 23.5659 0.424562C23.8831 0.556949 24.1695 0.753356 24.4073 1.0015C24.6451 1.24964 24.8292 1.54418 24.948 1.86669C25.0667 2.18921 25.1177 2.53276 25.0976 2.87586C25.0776 3.21897 24.987 3.55425 24.8314 3.86073C24.6759 4.16721 24.4588 4.43829 24.1937 4.65704L14.2005 14.3004C13.7436 14.7409 13.1362 14.991 12.5017 15Z"
              fill="#1D3547"
            />
          </svg>
        </button>
      </div>
    </div>
    <img
      class="absolute top-0 xl:top-2/3 -left-8 2xl:left-0"
      src="@/static/image/blue-cycle.png"
      alt=""
    />
    <img
      class="absolute right-1 bottom-1/3 transform -translate-y-3 z-0 xl:right-0 xl:top-1/4 2xl:translate-y-2/4 2xl:right-12"
      src="@/static/image/cycle.png"
      alt=""
    />
  </div>
</template>

<script src="./script.js">

</script>

<style>
</style>