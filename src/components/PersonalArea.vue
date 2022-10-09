<template>
  <div class="area">
    <div class="area-block">
      <h1 class="main_title">
        Привет, {{ helloName }}
      </h1>
      <div class="main_buttons">
        <button class="main_buttons-login area-login" @click="logoutAndExit">Выйти из аккаунта</button>
        <router-link to="/contacts" class="main_buttons-contacts area-contacts">Перейти в контакты</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "PersonalArea",
  methods: {
    ...mapActions(['logout']),
    logoutAndExit() {
      localStorage.removeItem('token')
      this.logout()
      this.$router.push('/')
    }
  },
  computed: {
    helloName() {
      return localStorage.getItem('token')
    }
  }
}
</script>

<style lang="scss">
.area {
  height: 100%;

  &-block {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    margin-left: 197px;

    @include breakpoint(800px) {
      margin-left: 10px;
    }
  }

  &-login {
    padding: 15px 10px;
  }

  &-contacts {
    padding: 15px 10px;
  }

}

</style>
