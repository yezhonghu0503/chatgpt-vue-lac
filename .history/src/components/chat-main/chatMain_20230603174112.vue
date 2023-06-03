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
            <div ref="htmltemp" class="" v-html="state.html"></div>
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
import { onMounted, ref, Ref, reactive, onUpdated, computed } from "vue";
import { marked } from "marked";
import { getChatMessage } from "../../api/chatMsg";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";

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
};
onUpdated(() => {
  Prism.highlightAll();
}),
  onMounted(() => {});

const getOutput = () => {
  changeHtml(htmlString);
  talks();
};
async function syncSetInterval(ms: number) {
  await new Promise((resolve) => setInterval(resolve, ms));
}

const props = reactive({
  content:
    "在使用axios进行网络请求时，可以通过使用axios.interceptors.request.use()方法设置请求拦截器，对请求进行一些处理或修改。\n\n请求拦截器可以在发送请求前对请求进行一些公共的处理，例如在每个请求中添加一些固定的请求头信息、对请求参数进行加密等。具体实现如下：\n\n```javascript\n// 创建一个axios实例\nconst axiosInstance = axios.create({\n  // ...\n});\n\n// 在请求拦截器中设置请求头信息\naxiosInstance.interceptors.request.use(\n  config => {\n    // 在请求头中添加token\n    const token = localStorage.getItem('token');\n    if (token) {\n      config.headers['Authorization'] = token;\n    }\n    return config;\n  },\n  error => {\n    return Promise.reject(error);\n  }\n);\n\n// 发起网络请求\naxiosInstance.get('/api/userInfo')\n  .then(res => {\n    console.log(res);\n  })\n  .catch(err => {\n    console.log(err);\n  });\n```\n\n在请求拦截器中，config对象包含了当前请求的配置信息，可以对其进行修改并返回，也可以直接返回一个Promise实例，将被拒绝的错误信息传递给catch函数。如果请求发生错误，将不会进入响应拦截器。",
});
const htmlString: any = `${marked.parse(props.content)}`;
// 方案一:响应式数据+v-html
const state = reactive({
  html: "",
});
const changeHtml = (htmlString: string): void => {
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
  console.log(res);
};
</script>
