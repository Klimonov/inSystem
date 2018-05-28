<template>
  <v-app @submit.prevent="checkLocalStorage">
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
            <v-form v-model="valid" class="started-form" @submit.prevent="enterUser">
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="Email"
                required
              ></v-text-field>

              <v-text-field type="password"
                v-model="password"
                :rules="passwordRules"
                :counter="6"
                label="Пароль"
                required
              ></v-text-field>

              <v-btn type="submit">Войти</v-btn>
              <v-btn @click="clear">Очистить</v-btn>

            </v-form>
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
      valid: false,
      active: null,
      email: '',
      emailRules: [
        v => !!v || 'Введите E-mail',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Неверный E-mail'
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Введите пароль',
        v => v.length >= 6 || 'Пароль не может быть меньше 6 символов'
      ],
      currentTab: 0,
      tabs: ['Вход', 'Регистрация']

    }),

    mounted () {
      this.$validator.localize('ru', this.dictionary)
    },
    methods: {
      checkLocalStorage () {
        if (localStorage.getItem('userEmail') !== null) {
          this.$router.push('/home')
        }
        this.$router.push('/')
      },
      enterUser () {
        if (this.valid === false) {
          alert('Заполните все поля')
        }
        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
          .then(() => {
            localStorage.setItem('userEmail', this.email)
            this.$router.push('/home')
          })
      },
      clear () {
        this.name = ''
        this.password = ''
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
