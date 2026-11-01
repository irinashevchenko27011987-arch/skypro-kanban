<template>
  <BaseHeader />
  <main class="main">
    <div class="container">
      <div class="main__block">
        <div class="main__content">
          <div class="column">
            <div class="column__title"><p>БЕЗ СТАТУСА</p></div>
            <div class="cards"><Task /><Task /><Task /><Task /><Task /></div>
          </div>

          <div class="column">
            <div class="column__title"><p>НУЖНО СДЕЛАТЬ</p></div>
            <div class="cards"><Task /></div>
          </div>

          <div class="column">
            <div class="column__title"><p>В РАБОТЕ</p></div>
            <div class="cards"><Task /><Task /><Task /></div>
          </div>

          <div class="column">
            <div class="column__title"><p>ТЕСТИРОВАНИЕ</p></div>
            <div class="cards"><Task /></div>
          </div>

          <div class="column">
            <div class="column__title"><p>ГОТОВО</p></div>
            <div class="cards"><Task /></div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import BaseHeader from "./BaseHeader.vue";
import Task from "./Task.vue";
</script>

<style lang="scss" scoped></style>
