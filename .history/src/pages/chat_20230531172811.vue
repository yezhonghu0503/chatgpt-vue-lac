<template>
  <div
    class="w-[68vw] h-[90vh] bg-rg-chat-border rounded-[30px] flex justify-end p-4 pl-0"
  >
    <chatMenu />
    <chatMain />
  </div>
</template>
<script lang="ts" setup>
// import chatMain from '../components/chat-main/chatMain.vue';
import chatMain from "@/components/chat-main/chatMain.vue";
import chatMenu from "../components/chat-menu/chatMenu.vue";
</script>
<style lang="less" scoped></style>
