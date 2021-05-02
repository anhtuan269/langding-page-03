<template>
  <div class="heading">
     <div class="big-header" v-show="head.big">
          <h2 class="text-80 leading-l-80 font-bold">{{head.big_title}}</h2>
     </div>
     <div class="normal" v-show="head.normal">
         <h2 class="text-50 leading-l-68 font-bold">{{head.normal_title}}</h2>
     </div>
     <div class="title" v-show="head.title">
          <h2 class="text-50 leading-l-68 font-bold"> {{head.normal_title}} </h2>
          <p class="leading-l-21 mt-3"> {{head.content}} </p>
     </div>
     <div class="custom" v-show="head.custom">
         <img class="w-28 h-10" :src="head.logo" alt="">
          <p class="leading-l-21 mt-3">{{head.content}}</p>
     </div>
     <div class="small" v-show="head.small">
         <h2 class="text-25 leading-l-34 font-bold"> {{head.small_title}}</h2>
          <p class="leading-l-21 mt-3"> {{head.content}}</p>
     </div>
     <div class="technology" v-show="head.technology">
         <h3 class="text-20 leading-l-27 font-bold"> {{head.technology_title}}</h3>
          <p class="leading-l-21 mt-3">{{head.content}}</p>
     </div>
  </div>
</template>

<script>
export default {
    props: {
        head: {
            type:Object,
            require:true,
            default () {
                return {
                    big: true,
                    normal:false,
                    title:false,
                    custom:false,
                    small:false,
                    technology:false,
                    big_title:"Tez və şəffaf reklam xidməti",
                    normal_title:"Reklam imkanları",
                    logo:'/image/sign.png',
                    small_title:'',
                    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper magna sapien",
                    small_title:'Standart banner',
                    technology_title:'İnternet'
                }
            }
        }
    }

}
</script>

<style>

</style>