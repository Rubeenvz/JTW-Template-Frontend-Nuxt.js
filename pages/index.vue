<template>
  <div class="main-body">
    <div class="main-body__container">
      <div class="main-body__head">
        <h2>Sign in</h2>
      </div>
      <div class="main-body__body">
        <form class="main-body__form" @submit="submitLoginForm">
          <input
            v-model="loginObj.email"
            class="main-body__input"
            placeholder="Email"
            name="email"
            type="email"
            required
          />
          <input
            v-model="loginObj.password"
            class="main-body__input"
            placeholder="Password"
            name="password"
            type="password"
            required
          />
          <button class="main-body__button">Sign in</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  middleware: 'authLogin',
  data() {
    return {
      loginObj: {},
    }
  },
  computed: {
    ...mapState('authData', ['token', 'auth']),
  },
  methods: {
    ...mapActions('authData', ['login']),
    submitLoginForm(e) {
      e.preventDefault()
      this.login(this.loginObj)
    },
  },
}
</script>
