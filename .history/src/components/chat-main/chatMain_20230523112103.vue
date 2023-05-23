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
            class="w-[90%] bg-rg-chat-border text-stone-300 rounded-[20px] mb-6 p-6 pb-16"
          >
            <div class="" v-highlight v-html="state.html"></div>
            <img
              class="w-[70px] h-[60px] relative bottom-[-90px]"
              src="https://blog.al2p.xyz/upload/laclogo.png"
            />
          </div>
          <div
            class="w-[90%] bg-rg-chat-border text-stone-300 ml-20 rounded-[20px] mb-6 p-6 pb-16"
          >
            <div ref="htmltemp" class="" v-highlight v-html="htmlString"></div>
            <img
              class="w-[70px] h-[60px] relative bottom-[-90px] left-[21vw]"
              src="https://blog.al2p.xyz/upload/laclogo.png"
            />
          </div>
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
import { onMounted, ref, Ref, computed, reactive } from "vue";
import { marked } from "marked";
import "highlight.js/styles/stackoverflow-light.css";
import hljs from "highlight.js/lib/core";
import VueHighlightJS from "vue-highlightjs";

directives: {
  highlight: VueHighlightJS.directive;
}
const msg: string = "一些回答";
const text: string | Ref = ref("");
const htmltemp: Ref = ref(null);
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
var htmlString: any = marked.parse(
  "vue3和vue2使用marked的方式基本一致，只不过vue3的setup语法要进行微调。\n\n1. 在vue项目中安装marked：`npm install marked`\n\n2. 在需要使用marked的组件中引入marked：`import marked from 'marked'`\n\n3. 在组件的setup方法中，使用marked将markdown文本转化为html：\n\n```javascript\nimport marked from 'marked'\n\nexport default {\n  name: 'Markdown',\n  props: ['text'],\n  setup(props) {\n    const html = marked(props.text)\n    return { html }\n  }\n}\n```\n\n4. 在模板中使用html渲染markdown内容：\n\n```html\n<template>\n  <div v-html=\"html\"></div>\n</template>\n```"
);
onMounted(() => {
  // const tempstr: any = htmltemp.value.childNodes[4].childNodes[0].innerText;
  // let i = 0;
  // let timer: any = null;
  // htmltemp.value.childNodes[4].childNodes[0].innerText = "";
  // console.log(htmltemp.value.childNodes[4].childNodes[0]);
  // timer = setInterval(() => {
  //   htmltemp.value.childNodes[4].childNodes[0].innerText += tempstr.charAt(i);
  //   i++;
  //   if (i === tempstr.length) {
  //     clearInterval(timer);
  //   }
  // }, 50);
  // console.log(htmltemp.value.childNodes[0].innerText = '');
  // htmlRendering(htmltemp.value);
});

const getOutput = () => {
  // htmlRendering(htmltemp.value);
  // setTimeout(() => {
  changeHtml();
  // }, 2000);
  // const tempstr: any =
  //   htmltemp.value.childNodes[4].childNodes[0].childNodes[0].innerText;
  // let i = 0;
  // let timer: any = null;
  // htmltemp.value.childNodes[4].childNodes[0].childNodes[0].innerText = "";
  // console.log(htmltemp);
  // timer = setInterval(() => {
  //   htmltemp.value.childNodes[4].childNodes[0].childNodes[0].innerText +=
  //     tempstr.charAt(i);
  //   i++;
  //   if (i === tempstr.length) {
  //     clearInterval(timer);
  //   }
  // }, 50);
};
async function syncSetInterval(ms: number) {
  await new Promise((resolve) => setInterval(resolve, ms));
}
const arrayd: any = [];
const htmlRendering = async (html: any) => {
  if (html.children.length > 0) {
    Array.from(html.children).forEach((item: any) => {
      htmlRendering(item);
    });
  }
  if (html.children.length === 0) {
    console.log(html.innerText);
    const temp = html.innerText;
    html.innerText = "";
    // for (let index = 0; index < temp.length; index++) {
    //   html.innerText += temp.charAt(index);
    //   await syncSetInterval(50);
    // }
  }
  await syncSetInterval(50);
};
console.log(htmltemp);

// 方案一:响应式数据+v-html
const state = reactive({
  html: "",
});
const changeHtml = () => {
  const temp = htmlString;
  let i = 0;
  let timer: any = null;
  timer = setInterval(() => {
    state.html += temp.charAt(i);
    i++;
    if (temp.length <= i) {
      clearInterval(timer);
    }
  });
};
</script>
