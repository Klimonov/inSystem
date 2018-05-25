<template>
  <v-app>
  <h1>in[system]</h1>
  <form class="started-form">
    <h3>Введите учетные данные</h3>
    <v-text-field
      v-validate="'required|max:50'"
      v-model="name"
      :counter="50"
      :error-messages="errors.collect('name')"
      label="Имя"
      data-vv-name="name"
      required
    ></v-text-field>
    <v-text-field type="password"
      v-validate="'required|min:6'"
      v-model="pwd"
      :error-messages="errors.collect('pwd')"
      label="Пароль"
      data-vv-name="pwd"
      required
    ></v-text-field>
    <v-checkbox
      v-validate="'required'"
      v-model="checkbox"
      value="1"
      label="Запомнить"
      data-vv-name="checkbox"
      type="checkbox"
    ></v-checkbox>

    <v-btn @click="submit">Войти</v-btn>
    <v-btn @click="clear">Очистить</v-btn>

    <router-link to="/home"><v-btn @click="submit">Войти</v-btn></router-link>
  </form>
  </v-app>
</template>

<script>
  export default {
    $_veeValidate: {
      validator: 'new'
    },

    data: () => ({
      name: '',
      pwd: '',
      checkbox: null,
      dictionary: {
        custom: {
          pwd: {
            required: () => 'Введите пароль',
            min: 'Пароль не может быть короче 6 символов'
            // custom messages
          },
          name: {
            required: () => 'Введите имя',
            max: 'Имя не может быть длинее 50 символов'
            // custom messages
          }
        }
      }
    }),

    mounted () {
      this.$validator.localize('ru', this.dictionary)
    },

    methods: {
      submit () {
        this.$validator.validateAll()
      },
      clear () {
        this.name = ''
        this.pwd = ''
        this.checkbox = null
        this.$validator.reset()
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
