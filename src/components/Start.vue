<template>
  <v-app>
    <h1>in[system]</h1>
    <div>
      <v-tabs
        v-model="active"
        color="cyan"
        dark
        slider-color="yellow"
      >
        <v-tab
          v-for="n in 2"
          :key="n"
          ripple
        >
          {{ tabs[n-1] }}
        </v-tab>
        <v-tab-item
          v-show="currentTab === 0"
        >
          <v-card flat>
            <form class="started-form">
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
              <router-link to="/home">
                <v-btn @click="submit">Войти</v-btn>
              </router-link>
            </form>
          </v-card>
        </v-tab-item>
        <v-tab-item
          v-show="currentTab === 1"
        >
          <v-card flat>
            <app-registration></app-registration>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </div>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      active: null,
      name: '',
      pwd: '',
      checkbox: null,
      currentTab: 0,
      tabs: ['Вход', 'Регистрация'],
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

<style>
  .tabs__container, .tabs__container--grow .tabs__div, .tabs__container--overflow .tabs__div {
    display: inline;
    text-align: center;
  }
  .chip__close {
    position: absolute;
    top: 10px;
    right: 10px;
  }
  h1 {
    text-align: center;
    margin: auto auto 0 auto;
    font-size: 64px;
    line-height: 2.4;
  }

  .started-form {
    height: 600px;
    width: 400px;
    margin: auto auto;
    text-align: center;
  }

</style>
