<template>
  <v-row justify="center login-form">
    <v-col cols="12" sm="8" md="4">
      <v-card class="mb-6 pl-6 pr-6 pb-6" elevation="12">
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
                color="primary"
                class="mr-4 mt-4 "
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
        this.$router.push('/');
      } catch (err) {
        console.log(err);
      }
    }
  }
}
</script>

<style lang="scss">
$b: '.login-form';

#{$b} {
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
