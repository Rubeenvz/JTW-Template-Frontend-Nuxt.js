<template>
  <div class="main-body">
    <div class="main-body__container">
      <div class="main-body__head">
        <h2>You are logged in!!</h2>
      </div>
      <form class="main-body__form py-5" @submit="logout">
        <button class="main-body__button">Log out</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  middleware: 'auth',
  methods: {
    ...mapActions('authData', ['logout']),
  },
}
</script>
