<template>
  <div class="login">
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container" v-if="isModal = true">
            <span @click="closeModal" class="modal-close"></span>
            <Dialog
                v-if="dialogVisible"
                :dialogVisible="dialogVisible"
                @isDialog="closeDialog"
            />
            <el-form
                :model="ruleForm"
                status-icon
                :rules="rules"
                ref="ruleForm"
                class="demo-ruleForm"
            >
              <el-form-item label="Email" prop="email">
                <el-input
                    type="email"
                    v-model="ruleForm.email"
                    autocomplete="off"
                ></el-input>
              </el-form-item>
              <el-form-item label="Password" prop="pass">
                <el-input
                    type="password"
                    v-model="ruleForm.pass"
                    autocomplete="off"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">Подтвердить</el-button>
                <el-button @click="resetForm('ruleForm')">Сбросить</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>

    </transition>
  </div>
</template>

<script>
import axios from "axios";
import {mapActions} from 'vuex'
import Dialog from "./Dialog"
import {validateEmail, validatePass} from "@/regulations/validate"

export default {
  name: "Login.vue",
  components: {
    Dialog
  },
  data() {
    return {
      dialogVisible: false,
      isModal: true,
      users: [],
      ruleForm: {
        pass: '',
        email: ''
      },
      rules: {
        email: [
          {validator: validateEmail, trigger: 'blur'},
          {type: 'email', message: 'Пожалуйста введите корректный email адрес', trigger: 'blur'}
        ],
        pass: [
          {validator: validatePass, trigger: 'blur'}
        ],
      }
    };
  },
  mounted() {
    this.getAllUsersFromApi()
  },
  methods: {
    ...mapActions(['login']),

    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const user = this.users.find(user => user.login === this.ruleForm.email && user.password === this.ruleForm.pass)
          if (user) {
            localStorage.setItem('token', user.name)
            this.login()
            this.$router.push('/personal-area')
          } else {
            this.$refs[formName].resetFields();
            this.dialogVisible = true
          }
        }
      });
    },

    resetForm(formName) {
      this.$refs[formName].resetFields();
    },

    closeModal() {
      this.isModal = false
      this.$emit('isModal', this.isModal)
    },

    async getAllUsersFromApi() {
      await axios.get('http://localhost:3000/users')
          .then(res => this.users = res.data)
          .catch(err => console.error(err))
    },

    closeDialog(data) {
      this.dialogVisible = data
    }
  },
}
</script>

<style lang="scss">
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
  position: relative;

  @include breakpoint(515px) {
    margin: 0 10px;
  }
}

.modal-close {
  display: block;
  cursor: pointer;
  position: absolute;
  top: 6%;
  right: 7%;

  &:before {
    content: "";
    position: absolute;
    width: 20px;
    height: 4px;
    background: gray;
  }

  &:after {
    content: "";
    position: absolute;
    width: 20px;
    height: 4px;
    background: gray;
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }
}

</style>
