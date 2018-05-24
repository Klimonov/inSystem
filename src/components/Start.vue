<template>
  <v-app>
    <template>
      <h1>in[system]</h1>
      <v-form v-model="valid" class="started-form">
        <h3>Введите учетные данные</h3>
        <v-text-field
          v-model="name"
          :rules="nameRules"
          :counter="50"
          label="Имя"
          required
        ></v-text-field>

        <v-text-field type="password"
          v-model="password"
          :rules="passwordRules"
          :counter="6"
          label="Пароль"
          required
        ></v-text-field>
        <router-link to="/home"><v-btn @click="submit">Войти</v-btn></router-link>

      </v-form>
    </template>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      valid: false,
      name: '',
      nameRules: [
        v => !!v || 'Введите имя',
        v => v.length <= 50 || 'Имя должно быть не длиннее 50 символов'
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Введите пароль',
        v => v.length >= 6 || 'Пароль не может быть меньше 6 символов'
      ]
    }),
    methods: {
      submit () {
      }
    }
  }
</script>
<style scoped>
  h1 {
    text-align: center;
    margin: auto auto 0 auto;
    font-size: 64px;
  }
  .started-form {
    width: 400px;
    margin: auto auto;
    text-align: center;
  }

</style>
