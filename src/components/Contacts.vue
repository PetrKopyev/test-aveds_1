<template>
  <div class="contacts">
    <h1 class="main_title contacts_title">Контакты</h1>
  </div>
</template>

<script>
export default {
  name: "Contacts"
}
</script>

<style lang="scss">
.contacts {
  height: 100%;

  &_title {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    margin-left: 197px;

    @include breakpoint(750px) {
      margin-left: 10px;
    }
  }
}
</style>
