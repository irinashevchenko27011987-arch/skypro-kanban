<script setup>
import BaseHeader from "./BaseHeader.vue";
import ExitModal from "./ExitModal.vue";
import NewCardModal from "./NewCardModal.vue";
import TaskColumn from "./TaskColumn.vue";
import TaskModal from "./TaskModal.vue";
</script>
<template>
  <div class="wrapper">
    <!-- pop-up start-->

    <ExitModal />

    <NewCardModal />

    <TaskModal />

    <!-- pop-up end-->

    <BaseHeader />
    <main class="main">
      <div class="container">
        <div class="main__block">
          <div class="main__content">
            <TaskColumn />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
