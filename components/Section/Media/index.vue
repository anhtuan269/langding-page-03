<template>
  <div class="media py-16 text-center xl:px-10  xl:pb-32">
    <div class="title">
      <p class="text-12">
        <span class="text-12 text-new-blue">RƏQƏMSAL</span>
        · MEDİA
      </p>
    </div>
    <Heading
    :head="head" />
    <div class="grid grid-cols-1  items-center justify-between xl:grid-cols-2 ">
        <div class="card flex items-center  mt-10  xl:w-600">
            <img src="@/static/image/icon-1.png" alt="">
            <div class="text-left ml-5 w-338">
              <Heading 
            :head="head1"
            /> 
            </div>
        </div>
          <div class="card flex items-center  mt-10  xl:w-600">
            <img src="@/static/image/icon-2.png" alt="">
            <div class="text-left ml-5">
              <Heading 
            :head="head2"
            /> 
            </div>
        </div>
          <div class="card flex items-center  mt-10  xl:w-600">
            <img src="@/static/image/icon-3.png" alt="">
            <div class="text-left ml-5">
              <Heading 
            :head="head3"
            /> 
            </div>
        </div>
          <div class="card flex items-center  mt-10  xl:w-600">
            <img src="@/static/image/icon-4.png" alt="">
             <div class="text-left ml-5">
              <Heading 
            :head="head4"
            /> 
            </div>
        </div>

    </div>
  </div>
</template>

<script src="./script.js">

</script>

<style>
</style>