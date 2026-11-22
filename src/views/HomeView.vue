<script setup>
import TaskDesk from "../components/TaskDesk.vue";
import { RouterView } from "vue-router";
</script>
<template>
  <div class="wrapper">
    <TaskDesk />
    <RouterView />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
