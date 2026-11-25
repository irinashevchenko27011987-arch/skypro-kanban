<template>
  <div class="wrapper">
    <div class="container-signup">
      <div class="modal">
        <div class="modal__block">
          <div class="modal__ttl">
            <h2>Регистрация</h2>
          </div>
          <form class="modal__form-login" @submit.prevent="handleSignUp">
            <input
              class="modal__input"
              type="text"
              placeholder="Имя"
              v-model="name"
              required
            />
            <input
              class="modal__input"
              type="email"
              placeholder="Эл. почта"
              v-model="email"
              required
            />
            <input
              class="modal__input"
              type="password"
              placeholder="Пароль"
              v-model="password"
              required
            />
            <button class="modal__btn-signup-ent" type="submit">
              Зарегистрироваться
            </button>
            <div class="modal__form-group">
              <p>
                Уже есть аккаунт?
                <router-link to="/login">Войдите здесь</router-link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const name = ref("");
const email = ref("");
const password = ref("");
const router = useRouter();

function handleSignUp() {
  localStorage.setItem("userInfo", "true");
  router.push("/");
}
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 100%;
  background-color: #eaeef6;
}
.container-signup {
  width: 100vw;
  min-height: 100vh;
  margin: 0 auto;
}
.modal {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
}
.modal__block {
  background-color: #ffffff;
  max-width: 368px;
  width: 100%;
  padding: 50px 60px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
}
.modal__ttl h2 {
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.6px;
  margin-bottom: 20px;
  color: #000000;
}
.modal__form-login {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.modal__input {
  width: 100%;
  border-radius: 8px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  outline: none;
  padding: 10px 8px;
  margin-bottom: 7px;
  font-size: 14px;

  &::placeholder {
    color: #94a6be;
  }
}
.modal__btn-signup-ent {
  width: 100%;
  height: 30px;
  background-color: var(--primary-color);
  border-radius: 4px;
  margin-top: 20px;
  margin-bottom: 20px;
  border: none;
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: var(--hover-color);
  }
}
.modal__form-group {
  text-align: center;
  p,
  a {
    color: rgba(148, 166, 190, 0.4);
    font-size: 14px;
    line-height: 150%;
  }
  a {
    text-decoration: underline;
  }
}
</style>
