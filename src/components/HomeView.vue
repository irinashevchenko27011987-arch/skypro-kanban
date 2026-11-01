<script setup>
import ExitModal from "./ExitModal.vue";
import NewCardModal from "./NewCardModal.vue";
import TaskDesk from "./TaskDesk.vue";
import TaskModal from "./TaskModal.vue";
</script>
<template>
  <div class="wrapper">
    <!-- pop-up start-->
    <ExitModal />
    <NewCardModal />
    <TaskModal />
    <!-- pop-up end-->
    <TaskDesk />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
