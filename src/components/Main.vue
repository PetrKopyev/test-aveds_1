<template>
  <div class="main">
    <h1 class="main_title">Место для получения медицинской помощи</h1>
    <div class="main_buttons">
      <button @click="openModal" class="main_buttons-login">Войти</button>
      <router-link to="/contacts" class="main_buttons-contacts">Контакты</router-link>
    </div>
    <div class="main_options">
      <div class="main_options-block">
        <img src="../assets/image/circle-1.png" alt="Онлайн-прием">
        <h3>Онлайн-прием</h3>
        <span></span>
        <p>Рыба текст</p>
      </div>
      <div class="main_options-block">
        <img src="../assets/image/circle-2.png" alt="Экстренный Случай">
        <h3>Экстренный Случай</h3>
        <span></span>
        <p>Рыба текст</p>
      </div>
      <div class="main_options-block">
        <img src="../assets/image/circle-3.png" alt="Лечение рака">
        <h3>Лечение рака</h3>
        <span></span>
        <p>Рыба текст</p>
      </div>
    </div>
    <Login
        v-if="showModal"
        @isModal="closeModal"
    />
  </div>
</template>

<script>
import Login from "../components/auth/Login"

export default {
  name: "Main",
  components: {
    Login
  },
  data() {
    return {
      showModal: false
    }
  },
  methods: {
    closeModal(data) {
      this.showModal = data
    },
    openModal() {
      this.showModal = true
    }
  }
}
</script>

<style lang="scss">
.main {
  margin: 96px 197px 0 197px;
  display: flex;
  flex-direction: column;

  @include breakpoint(1190px) {
    margin: 76px 130px 0 130px;
  }
  @include breakpoint(905px) {
    margin: 55px 40px 0 40px;
  }
  @include breakpoint(725px) {
    margin: 55px 10px 0 10px;
  }

  &_title {
    max-width: 727px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 58px;
    line-height: 80px;
    letter-spacing: 0.2px;
    color: #252B42;
    text-align: left;

    @include breakpoint(665px) {
      font-size: 38px;
      line-height: 49px;
    }

    @include breakpoint(444px) {
      font-size: 28px;
      line-height: 39px;
    }
  }

  &_buttons {
    margin-top: 35px;
    display: flex;
    flex-direction: row;
    align-items: center;

    &-login {
      font-family: 'Montserrat', sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 22px;
      text-align: center;
      letter-spacing: 0.2px;
      color: #FFFFFF;
      border-radius: 5px;
      padding: 15px 40px;
      background-color: #FF685B;
      margin-right: 10px;
      border: none;
      cursor: pointer;
    }

    &-contacts {
      font-family: 'Montserrat', sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 22px;
      text-align: center;
      letter-spacing: 0.2px;
      color: #FF685B;
      border: 1px solid #FF685B;
      border-radius: 5px;
      padding: 14px 40px;
    }
  }

  &_options {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    gap: 30px;
    margin-top: 96px;
    margin-bottom: 60px;

    @include breakpoint(760px) {
      grid-template-columns: 1fr;
    }
    @include breakpoint(500px) {
      margin: 35px 13px 62px 13px;
    }

    &-block {
      width: 100%;
      padding: 35px 40px;
      background: #FFFFFF;
      box-shadow: 0px 13px 19px rgba(0, 0, 0, 0.07);
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin: 0 23px;


      & img {
        width: 72px;
        height: 72px;
        margin-bottom: 20px;
      }

      & h3 {
        font-family: 'Montserrat', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.1px;
        color: #252B42;
        margin-bottom: 20px;
      }

      & span {
        width: 50px;
        height: 2px;
        background: #E74040;
        margin-bottom: 20px;
      }

      & p {
        font-family: 'Montserrat', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0.2px;
        color: #737373;
      }
    }
  }
}

</style>
