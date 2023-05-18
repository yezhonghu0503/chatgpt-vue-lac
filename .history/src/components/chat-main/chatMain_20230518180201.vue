<template>
  <div class="w-[51vw] h-[100%] bg-rg-chat rounded-[30px] flex">
    <div class="flex flex-col w-[34vw] h-[100%] border-r-2 border-indigo-500">
      <div
        class="w-[100%] h-[50px] border-b-2 border-indigo-500 flex justify-start items-center p-5"
      >
        <span
          class="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500"
          >ChatGPT Session window</span
        >
      </div>
      <div class="flex justify-center w-[100%] p-4">
        <div class="w-[100%] bg-black">
          {{ msg }}
          <img src="" alt="" />
        </div>
      </div>
    </div>
    <div class="w-[17vw] h-[50px] border-b-2 border-indigo-500"></div>
  </div>
</template>

<script lang="ts" setup>
const msg: string = "一些回答";
</script>
