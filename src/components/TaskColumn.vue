<template>
  <div class="main__column column">
    <div class="column__title">
      <p>Без статуса</p>
    </div>
    <div class="cards">
      <div v-if="tasks && tasks.length > 0">
        <Task v-for="task in tasks" :key="task.id" :task="task" />
      </div>
      <div v-else class="no-tasks-message">
        <p>Задач нет</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import Task from "./Task.vue";
</script>

<style lang="scss" scoped>
@import "../assets/main/main.scss";
.main__column {
  width: 20%;
  margin: 0 auto;
  display: block;
}

.column__title {
  padding: 0 10px;
  margin: 15px 0;
}
.column__title p {
  color: #94a6be;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  text-transform: uppercase;
}

.cards {
  width: 100%;
  display: block;
  position: relative;
}
</style>
