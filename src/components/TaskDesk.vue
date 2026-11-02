<template>
  <BaseHeader />
  <main class="main">
    <div class="container">
      <div class="loader" v-if="loading">Данные загружаются</div>

      <div v-else class="main__block">
        <div class="main__content">
          <div class="column">
            <div class="column__title"><p>БЕЗ СТАТУСА</p></div>
            <div class="cards">
              <Task
                v-for="item in initialTasks.filter(
                  (t) => t.status === 'БЕЗ СТАТУСА',
                )"
                :key="item.id"
                :task="item"
              />
            </div>
          </div>

          <div class="column">
            <div class="column__title"><p>НУЖНО СДЕЛАТЬ</p></div>
            <div class="cards">
              <Task
                v-for="item in initialTasks.filter(
                  (t) => t.status === 'НУЖНО СДЕЛАТЬ',
                )"
                :key="item.id"
                :task="item"
              />
            </div>
          </div>

          <div class="column">
            <div class="column__title"><p>В РАБОТЕ</p></div>
            <div class="cards">
              <Task
                v-for="item in initialTasks.filter(
                  (t) => t.status === 'В РАБОТЕ',
                )"
                :key="item.id"
                :task="item"
              />
            </div>
          </div>

          <div class="column">
            <div class="column__title"><p>ТЕСТИРОВАНИЕ</p></div>
            <div class="cards">
              <Task
                v-for="item in initialTasks.filter(
                  (t) => t.status === 'ТЕСТИРОВАНИЕ',
                )"
                :key="item.id"
                :task="item"
              />
            </div>
          </div>

          <div class="column">
            <div class="column__title"><p>ГОТОВО</p></div>
            <div class="cards">
              <Task
                v-for="item in initialTasks.filter(
                  (t) => t.status === 'ГОТОВО',
                )"
                :key="item.id"
                :task="item"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { initialTasks } from "../mocks/tasks.js";
import BaseHeader from "./BaseHeader.vue";
import Task from "./Task.vue";
import { ref, onMounted } from "vue";
const loading = ref(true);
onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 2000);
});
</script>

<style scoped>
.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  width: 100%;
}
</style>
