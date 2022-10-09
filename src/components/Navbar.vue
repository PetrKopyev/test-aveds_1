<template>
  <div class="navbar">
    <div class="navbar_block">
      <router-link :to="clickLogo">
        <img
            src="../assets/image/logo.png"
            alt="logo"
            class="navbar_logo"
        >
      </router-link>
      <div class="navbar_links">
        <router-link to="/contacts" class="navbar_contacts">Контакты</router-link>
        <button
            v-if="hasToken"
            class="navbar_login"
            @click="logoutAndExit"
        >
          Выйти
        </button>
        <button
            v-else
            class="navbar_login"
            @click="showModal = true"
        >
          Войти
        </button>
      </div>
    </div>
    <Login
        v-if="showModal"
        @close="showModal = false"
        @isModal="closeModal"
    />
  </div>
</template>

<script>
import Login from "@/components/auth/Login";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "Navbar",
  components: {
    Login
  },
  computed: {
    ...mapGetters(['hasToken']),
    clickLogo() {
      if (localStorage.token) {
        return '/personal-area'
      } else {
        return '/'
      }
    }
  },
  data() {
    return {
      showModal: false
    }
  },
  methods: {
    ...mapActions(['logout']),
    closeModal(data) {
      this.showModal = data
    },
    logoutAndExit() {
      localStorage.removeItem('token')
      this.logout()
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss">
.navbar {
  border-bottom: 1px solid #000000;

  &_block {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0 60px;

    @include breakpoint(905px) {
      margin: 0 40px;
    }

    @include breakpoint(600px) {
      margin: 0 10px;
    }
  }

  &_logo {
    width: 53px;
    height: 100%;
  }

  &_links {
    display: flex;
    align-items: center;
  }

  &_contacts {
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.2px;
    color: #737373;
    margin-right: 59px;

    @include breakpoint(600px) {
      margin-right: 10px;
    }
  }

  &_login {
    border-radius: 7px;
    border: 2px solid #FF685B;
    color: #FF685B;
    padding: 8px 60px;
    margin: 20px 0;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    background-color: #ffffff;
    cursor: pointer;

    @include breakpoint(500px) {
      padding: 6px 20px;

    }

  }
}
</style>
