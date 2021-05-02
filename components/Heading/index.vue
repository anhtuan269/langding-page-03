<template>
  <div class="heading">
     <div class="big-header" v-show="head.big">
          <h2 class="text-50 leading-l-68 md:text-80 md:leading-l-80 font-bold">
              Tez 
              <br>
              və şəffaf 
              <br>
              reklam xidməti
          </h2>
     </div>
     <div class="normal" v-show="head.normal">
         <h2 class=" font-bold text-34 md:text-50 md:leading-l-68 ">{{head.normal_title}}</h2>
     </div>
     <div class="title" v-show="head.title">
          <h2 class="font-bold text-34 md:text-50 md:leading-l-68"> {{head.normal_title}} </h2>
          <p class="leading-l-21 xl:w-400  mt-3"> {{head.content}} </p>
     </div>
     <div class="custom" v-show="head.custom">
         <img class="w-28 h-10" :src="head.logo" alt="">
          <p class="leading-l-21 xl:w-400  mt-3">{{head.content}}</p>
     </div>
     <div class="small" v-show="head.small">
         <h2 class=" text-20 md:text-25 md:leading-l-34 font-bold"> {{head.small_title}}</h2>
          <p class="leading-l-21 xl:w-400  mt-3"> {{head.content}}</p>
     </div>
     <div class="technology" v-show="head.technology">
         <h3 class="text-20 leading-l-27 font-bold"> {{head.technology_title}}</h3>
          <p class="leading-l-21 xl:w-400  mt-3">{{head.content}}</p>
     </div>
  </div>
</template>

<script src="./script.js">

</script>

<style>

</style>