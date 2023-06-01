<template>
  <div class="w-[17vw] h-[100%] flex justify-center items-end p-2">
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
import { login } from "../../api/login";
import { ElMessage, ElMessageBox } from "element-plus";
const getToken = async () => {
  const loginFrom = {
    passphrase: "hugiegie",
  };
  const res = await login(loginFrom);
  console.log(res);
};

const open = () => {
  ElMessageBox.prompt("Please input your e-mail", "Tip", {
    confirmButtonText: "OK",
    cancelButtonText: "Cancel",
    inputPattern:
      /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
    inputErrorMessage: "Invalid Email",
  })
    .then(({ value }) => {
      ElMessage({
        type: "success",
        message: `Your email is:${value}`,
      });
    })
    .catch(() => {
      ElMessage({
        type: "info",
        message: "Input canceled",
      });
    });
};
</script>

<style scoped></style>
