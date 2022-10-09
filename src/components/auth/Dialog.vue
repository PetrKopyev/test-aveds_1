<template>
  <div class="dialog">
    <el-dialog
        title="Ошибка авторизации"
        :visible.sync="dialogVisible"
        :before-close="dialogClose"
        width="100%"
    >
      <span>Нет такого пользователя</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogClose">OK</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
export default {
  name: "Dialog",
  props: {
    dialogVisible: Boolean
  },
  methods: {
    dialogClose() {
      this.dialogVisible = false
      this.$emit('isDialog', this.dialogVisible)
    }
  },

}
</script>

<style lang="scss">
.el-dialog {
  background: lightcoral;
  margin-top: 0 !important;

  & span {
    color: #000000;
    font-size: 20px;
  }
}
</style>
