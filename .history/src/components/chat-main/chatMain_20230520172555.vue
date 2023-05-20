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
        <div class="w-[95%] text-start bg-rg-chat-border p-6 pb-15">
          {{ text }}
          <div v-html="htmlString"></div>
          <img src="" alt="" />
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
import { onMounted, ref, Ref, computed } from "vue";
import { marked } from "marked";
// import highlightjs from "highlight.js";
// or const { marked } = require('marked');
// import "highlight.js/styles/default.css";

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
  if (actualHeight > totalHeight) {
    trRows < 3 ? trRows++ : "";
    console.log(actualHeight);
    console.log(totalHeight);
  }
  //   if (actualHeight === totalHeight) {
  //     console.log(actualHeight);
  //     console.log(totalHeight);
  //   }
};

// 格式化字符串
// onMounted(() => {
var htmlString = marked.parse(
  "vue3和vue2使用marked的方式基本一致，只不过vue3的setup语法要进行微调。\n\n1. 在vue项目中安装marked：`npm install marked`\n\n2. 在需要使用marked的组件中引入marked：`import marked from 'marked'`\n\n3. 在组件的setup方法中，使用marked将markdown文本转化为html：\n\n```javascript\nimport marked from 'marked'\n\nexport default {\n  name: 'Markdown',\n  props: ['text'],\n  setup(props) {\n    const html = marked(props.text)\n    return { html }\n  }\n}\n```\n\n4. 在模板中使用html渲染markdown内容：\n\n```html\n<template>\n  <div v-html=\"html\"></div>\n</template>\n```"
);
console.log(htmlString);

// const html = hljs.highlightAuto(htmlString).value;
// console.log(htmlString);
</script>
