<template>
  <div
    v-loading.fullscreen.lock="fullscreenLoading"
    :element-loading-svg="svg"
    element-loading-svg-view-box="-10, -10, 50, 50"
    class="w-[17vw] h-[100%] flex justify-center items-end p-2 custom-loading-svg"
  >
    <div
      class="w-[100%] h-[150px] bg-rg-chat flex flex-col justify-around items-center rounded-[10px]"
    >
      <div class="w-[100%] h-[75px] flex justify-between items-center p-2">
        <div class="flex items-center">
          <img
            class="w-[50px] h-[45px]"
            src="https://blog.al2p.xyz/upload/laclogo.png"
          />
          <div class="flex flex-col items-start ml-2">
            <div class="text-sm font-bold">F.R.I.D.A.Y. el.ser</div>
            <div class="text-xs text-slate-400">blog.al2p.xyz</div>
          </div>
        </div>
        <div
          class="flex justify-center rounded-[5px] text-sm items-center w-[60px] h-[25px] bg-gradient-to-r from-pink-500 to-violet-500"
        >
          Free
        </div>
      </div>
      <el-button
        class="w-[13vw] h-[40px] rounded-[10px] border-2 font-bold"
        text
        @click="open"
        >Start using after Auth</el-button
      >
      <!-- <div
      @click="getToken"
        class="text-sm flex items-center justify-center w-[13vw] h-[40px] rounded-[10px] border-2 border-indigo-500 font-bold"
      >
        update for pro
      </div> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { login } from "../../api/login";
import { ElMessage, ElMessageBox } from "element-plus";

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
const fullscreenLoading = ref(false);

const getToken = async (passphrase: string) => {
  const loginFrom = {
    passphrase: passphrase,
  };
  const res = await login(loginFrom);
  console.log(res);

  ElMessage({
    type: res.data.status === 200 ? "success" : "error",
    message: `${res.data.message}`,
  });
  fullscreenLoading.value = false;
};

const open = () => {
  ElMessageBox.prompt("请输入鉴权信息，以获取使用权限", "提示", {
    confirmButtonText: "确认",
    cancelButtonText: "取消",
    // inputPattern:
    //   /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
    inputErrorMessage: "请输入鉴权信息",
  })
    .then(({ value }) => {
      fullscreenLoading.value = true;
      getToken(value);
    })
    .catch(() => {
      ElMessage({
        type: "info",
        message: "已经取消",
      });
    });
};
</script>

<style scoped></style>
