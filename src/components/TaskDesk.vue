<template>
  <BaseHeader />
  <main class="main">
    <div class="container">
      <div class="loader-container" v-if="loading">
        <div class="loader"></div>
        <p class="loader-text">Данные загружаются...</p>
      </div>
      <div
        v-else-if="!initialTasks || initialTasks.length === 0"
        class="no-tasks-global"
      >
        <h2>Задач нет</h2>
        <p>Создайте свою первую задачу в хедере!</p>
      </div>
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

<style lang="scss" scoped>
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.loader-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  width: 100%;
}

.loader {
  width: 50px;
  height: 50px;
  border: 5px solid #eaeef6;
  border-top: 5px solid var(--primary-color);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 15px;
}

.loader-text {
  color: #94a6be;
  font-size: 16px;
  font-weight: 500;
}

.no-tasks-global {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  text-align: center;

  h2 {
    font-size: 24px;
    font-weight: 700;
    color: #94a6be;
    margin-bottom: 10px;
  }
  p {
    font-size: 16px;
    color: #b5c4d6;
  }
}
.main__block {
  width: 100%;
  margin: 0 auto;
  padding: 25px 0 49px;
}
.main__content {
  width: 100%;
  display: flex;
}
@media screen and (max-width: 1200px) {
  .main__block {
    width: 100%;
    margin: 0 auto;
    padding: 40px 0 64px;
  }
  .main__content {
    display: block;
  }
}
</style>
