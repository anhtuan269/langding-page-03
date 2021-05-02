<template>
  <div class="flex flex-col">
      <div class="right">
          <Header />
          <Heading />
          <button class="button bg-purple py-4 px-8 font-bold text-white inline-block rounded-3xl">İşlərimizlə tanış ol</button>
          <h2 class="text-200 leading-l-272 font-bold text-opacity-5 text-rgba">Rəqəmsal</h2>
          <Customer />
      </div>
      <div class="left">
          <img src="@/static/image/hero-baner.png" alt="">
      </div>
  </div>
</template>

<script>
import Customer from '@/components/Customer'
import Header from '@/components/Header'
import Heading from '@/components/Heading'
export default {
    name:'Hero',
    components: {
        Heading,
        Header,
        Customer
    }

}
</script>

<style>

</style>