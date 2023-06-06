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
        <div class="w-[95%] h-[70vh] text-start p-4 pl-0 overflow-auto">
          {{ text }}
          <div
            v-loading="isTakls"
            :element-loading-svg="svg"
            element-loading-background="rgba(122, 122, 122, 0)"
            element-loading-svg-view-box="-10, -10, 50, 50"
            class="w-[90%] bg-rg-chat-border text-stone-300 rounded-[20px] mb-6 p-6"
          >
            <div ref="htmltemp" class="" v-html="state.html"></div>
            <img
              class="w-[40px] h-[40px] rounded-md relative bottom-[-40px]"
              src="https://blog.al2p.xyz/upload/logo.png"
            />
          </div>
          <!-- <div
            v-loading="isTakls"
            :element-loading-svg="svg"
            element-loading-background="rgba(122, 122, 122, 0)"
            element-loading-svg-view-box="-10, -10, 50, 50"
            class="w-[90%] bg-rg-chat-border text-stone-300 rounded-[20px] mb-6 p-6"
          >
            <div ref="htmltemp" class="" v-html="state.html"></div>
            <img
              class="w-[40px] h-[40px] rounded-md relative bottom-[-40px]"
              src="https://blog.al2p.xyz/upload/logo.png"
            />
          </div> -->
        </div>
        <div
          class="flex w-[95%] items-center justify-center rounded-[10px] border-[1px] border-slate-500"
          :class="trRows === 1 ? 'h-14' : trRows === 2 ? 'h-20' : 'h-24'"
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
            @click="getOutput"
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
import { onMounted, ref, Ref, reactive, onUpdated, computed } from "vue";
import { marked } from "marked";
import { getChatMessage } from "../../api/chatMsg";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";

const svg = `
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `;
const msg: string = "一些回答";
const text: string | Ref = ref("");
const htmltemp: Ref = ref(null);
let trRows: number = 1;
const tr: Ref = ref(null);
let isTakls: Ref = ref(false);

const handelInput = () => {
  const textarea = tr.value;
  const lineHeight = parseInt(window.getComputedStyle(textarea).lineHeight);
  const rows = parseInt(textarea.getAttribute("rows"));
  const totalHeight = lineHeight * rows;
  textarea.style.height = "auto";
  const actualHeight = textarea.scrollHeight;
  if (actualHeight > totalHeight) {
    trRows < 3 ? trRows++ : "";
  }
};
onUpdated(() => {
  Prism.highlightAll();
}),
  onMounted(() => {});

const getOutput = () => {
  isTakls.value = true;
  talks();
};
async function syncSetInterval(ms: number) {
  await new Promise((resolve) => setInterval(resolve, ms));
}

const props = reactive({
  content: "",
});
// 方案一:响应式数据+v-html
const state = reactive({
  html: "",
});
const changeHtml = (htmlString: string): void => {
  isTakls.value = false;
  const temp = htmlString;
  let i = 0;
  let timer: number = 0;
  timer = setInterval(() => {
    state.html += temp.charAt(i) + temp.charAt(i + 1);

    i += 2;
    if (temp.length <= i) {
      clearInterval(timer);
    }
  }, 50);
};

const renderHTML = computed(() => {
  return state.html;
});
let htmlString = "";
const talks = async () => {
  const from = {
    modelName: "",
    msg: [
      {
        role: "user",
        content:
          "_变量名,下划线加变量名这种命名方式，在前端开发中，什么情况下使用合适",
      },
    ],
  };
  const res = await getChatMessage(from);
  props.content = res.data.choices[0].message.content;
  const htmlString: any = `${marked.parse(props.content)}`;
  changeHtml(htmlString);
};
</script>
