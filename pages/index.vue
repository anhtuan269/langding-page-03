<template>
 <div id="app" class="px-10 bg-gray-100 lg:px-0 2xl:max-w-1500 2xl:mx-auto" >
   <Hero />
   <Media />
   <Customer />
   <Format />
   <CustomerBlue />
   <Data />
 </div>
</template>

<script>
import Customer from '@/components/Section/Customer'
import CustomerBlue from '@/components/Section/CustomerBlue'
import Data from '@/components/Section/Data'
import Format from '@/components/Section/Format'
import Hero from '@/components/Section/Hero'
import Media from '@/components/Section/Media'
export default {

  components:{
    Customer,
    CustomerBlue,
    Format,
    Data,
    Hero,
    Media
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

</style>
