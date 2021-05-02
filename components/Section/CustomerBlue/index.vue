<template>
  <div class="customer bg-blue py-16 xl:bg-gray-100 relative">
    <CustomerSlide class="relative xl:absolute xl:left-10 xl:-top-1/4 transform xl:translate-y-20 2xl:left-44 2xl:translate-x-5" :blue="blue" :orange="orange" />
    <div class="bg-blue xl:px-10">
      <div class="bg-white mt-16 xl:w-700 xl:h-400 xl:mt-0 xl:overflow-x-hidden xl:ml-auto">
        <h5 class="text-12 text-new-blue font-semibold pt-8 ml-12">
          PARTNYORLARIMIZ
        </h5>
        <div class="pt-4 ml-12 xl:w-7/12">
          <Heading :head="head" />
        </div>
        <div class="col ">
          <Customer  class="block md:hidden"/>
           <Customer :settings="settings" class="hidden md:block" />
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./script.js">

</script>

<style>
</style>