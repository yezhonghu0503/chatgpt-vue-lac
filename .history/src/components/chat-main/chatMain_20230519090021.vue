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
      <div
        class="flex flex-col justify-end items-center w-[100%] h-[100%] p-4 pb-10"
      >
        <div class="w-[95%] bg-black">
          {{ text }}
          <img src="" alt="" />
        </div>
        <div
          class="flex w-[95%] items-center justify-center rounded-[10px] border-[1px] border-slate-500"
          :class="trRows === 1 ? 'h-16' : trRows === 2 ? 'h-20' : 'h-24'"
        >
          <!-- <input class="w-[90%]" type="text" /> -->
          <textarea
            ref="tr"
            class="w-[90%] h-auto"
            :rows="trRows"
            cols="30"
            v-model="text"
            @input="handelInput"
            placeholder="输入内容开始聊天"
          ></textarea>
          <img
            class="w-[25px] h-[25px]"
            src="https://blog.al2p.xyz/upload/send.png"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="w-[17vw] h-[50px] border-b-2 border-indigo-500"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, Ref } from "vue";

const msg: string = "一些回答";
const text: string | Ref = ref("");
let trRows: number = 1;
const tr: Ref = ref(null);

const handelInput = () => {
  const textarea = tr.value;
  const lineHeight = parseInt(window.getComputedStyle(textarea).lineHeight);
  const rows = parseInt(textarea.getAttribute("rows"));
  const totalHeight = lineHeight * rows;
  textarea.style.height = "auto";
  const actualHeight = textarea.scrollHeight;
  if (actualHeight > totalHeight - 5) {
    trRows < 3 ? trRows++ : "";
  }
  if (actualHeight === totalHeight) {
    console.log(actualHeight);
    console.log(totalHeight);
  }
};
</script>
