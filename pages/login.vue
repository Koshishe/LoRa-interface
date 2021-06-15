<template>
  <v-row justify="center">
    <v-col cols="12" sm="8" md="4">
      <v-card class="mb-6 pl-6 pr-6 pb-6">
        <v-card-title>Авторизация</v-card-title>
          <v-form @submit.prevent="userLogin">
            <v-container>
              <v-text-field
                v-model="login.username"
                label="Username"
                required
              ></v-text-field>
              <v-text-field
                v-model="login.password"
                label="Password"
                required
              ></v-text-field>
              <v-btn
                class="mr-4"
                type="submit"
              >
                Войти
              </v-btn>
            </v-container>
          </v-form>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  layout: 'guest',
  middleware: 'auth',
  auth: false,
  data() {
    return {
      login: {
        username: '',
        password: ''
      },
    }
  },
  methods: {
    async userLogin() {
      try {
        let response = await this.$auth.loginWith('local', { data: this.login });
        console.log(this.$auth.loggedIn);
        this.$router.push('/devices');
      } catch (err) {
        console.log(err);
      }
    }
  }
}
</script>

<style scoped>

</style>
