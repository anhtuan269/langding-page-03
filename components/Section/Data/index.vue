<template>
  <div class="data pb-16 text-center mt-16 relative z-50">
      <h6 class="text-12 text-new-blue font-semibold mb-5">E-MAİL</h6>
       <h2 class="text-34 leading-l-68 font-bold">Əlaqə yarat</h2>
       <form class="z-50" action="" @submit.prevent="save">
           <div class="form-group z-50">
               <input type="text" class="w-400 h-50 rounded-20 bg-white shadow-xl mb-5 pl-5 focus:outline-none" placeholder="Ad / soyad">
           </div>
           <div class="form-group">
               <input type="email" class="w-400 h-50 rounded-20 bg-white shadow-xl mb-5 pl-5  focus:outline-none" placeholder="E-mail ünvan">
           </div>
            <div class="form-group">
                <textarea name="" id="text" class="w-400 h-150 rounded-20 bg-white shadow-xl p-5  focus:outline-none"  placeholder="İsmarıc"></textarea>
           </div> 
           <button type="submit" class="w-400 h-50 bg-purple rounded-20 text-white  hover:bg-blue mt-5 font-bold duration-500 ease-in-out z-50"> Müraciəti göndər</button>
       </form>
      <img class="absolute top-0 z-a" src="@/static/image/blue-cycle.png" alt="">
    <img class="absolute right-1 bottom-0 transform -translate-y-3 z-a" src="@/static/image/cycle.png" alt="">
  </div>
</template>

<script>
export default {
methods: {
save () {
    console.log(1)
}
}
}
</script>

<style>

</style>