<template>
  <div class="main__column column">
    <div class="column__title">
      <p>Без статуса</p>
    </div>
    <Task />
  </div>
  <div class="main__column">
    <div class="column__title">
      <p>Нужно сделать</p>
    </div>
    <Task />
  </div>
  <div class="main__column">
    <div class="column__title">
      <p>В работе</p>
    </div>
    <Task />
  </div>
  <div class="main__column">
    <div class="column__title">
      <p>Тестирование</p>
    </div>
    <Task />
  </div>
  <div class="main__column">
    <div class="column__title">
      <p>Готово</p>
    </div>
    <Task />
  </div>
</template>

<script setup>
import Task from "./Task.vue";
</script>

<style lang="scss" scoped></style>
