<template>
  <v-app>
    <v-toolbar class="toolbar">
      <v-toolbar-title>in[system]</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat>
          <v-icon left>person</v-icon>
          {{ userEmailFromLockalStorage }}
        </v-btn>

        <router-link to="/">
          <v-btn flat class="button-exit">
            Выход
          </v-btn>
        </router-link>
      </v-toolbar-items>
    </v-toolbar>
    <main>
        <template>
          <h3 class="users-list-title">Список пользователей</h3>
          <v-chip  close>
            <v-avatar>
              <img src="https://randomuser.me/api/portraits/men/35.jpg" alt="trevor">
            </v-avatar>
            <ul class="user-list">

              <li><strong>Фамилия:</strong> {{ surname }}</li>
              <li><strong>Имя:</strong> {{ name }}</li>
              <li><strong>Отчество:</strong> {{ patronymic }}</li>
              <li><strong>Дата рождения:</strong> {{ dateOfBirth }}</li>
              <li><strong>Должность:</strong> {{ position }}</li>
              <li><strong>Подразделение:</strong> {{ subdivision }}</li>
              <li><strong>Телефон:</strong> {{ phone }}</li>
              <li><strong>Email:</strong> {{ email }}</li>
              <li><strong>Пароль:</strong> {{ password }}</li>
            </ul>
          </v-chip>
        </template>
      <template>



          <app-registration></app-registration>

      </template>

    </main>

    <v-footer height="auto" class="footer">
      <v-card
        flat
        tile
        class="indigo lighten-1 white--text text-xs-center"
      >

        <v-card-text class="white--text pt-0">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent
          ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet
          dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum
          ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci
          varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </v-card-text>
        <v-card-text class="white--text">
          &copy;2018 — <strong>in[system]</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      userEmailFromLockalStorage: localStorage.getItem('userEmail'),
      valid: false,
      surname: '',
      surnameRules: [
        v => !!v || 'Введите фамилию',
        v => v.length <= 50 || 'Фамилия должна быть не длиннее 50 символов'
      ],
      name: '',
      nameRules: [
        v => !!v || 'Введите имя',
        v => v.length <= 50 || 'Имя должно быть не длиннее 50 символов'
      ],
      patronymic: '',
      patronymicRules: [
        v => !!v || 'Введите отчество',
        v => v.length <= 50 || 'Отчество должно быть не длиннее 50 символов'
      ],
      dateOfBirth: '',
      dateOfBirthRules: [
        v => !!v || 'Введите дату рождения'
      ],
      position: '',
      subdivision: '',
      phone: '',
      phoneRules: [
        v => !!v || 'Введите телефон',
        v => v.length <= 50 || 'Отчество должно быть не длиннее 50 символов'
      ],
      email: '',
      emailRules: [
        v => !!v || 'Введите E-mail',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Неверный E-mail'
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

<style>
  .application .theme--light.chip, .theme--light .chip {
    height: 400px;
    margin-top: 30px;
  }
  .chip--small .icon, .chip__close {
    position: absolute;
    top: 10px;
    right: 10px;
  }
  .chip .avatar {
    position: absolute;
    top: 0;
  }

  .user-list {
    display: flex;
    flex-direction: column;
  }

  .started-form {
    width: 400px;
    margin-right: 50px;
    text-align: center;
    padding-bottom: 170px;
  }

  .users-list-title {
    left: 10px;
    position: absolute;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 10px 30px;
  }

  a {
    color: #42b983;
  }

  .footer {
    position: fixed;
    bottom: 0;
  }

  .toolbar {
    position: fixed;
    top: 0;
    z-index: 100;
  }

  main {
    display: flex;
    overflow: auto;
    margin-top: 80px;
    justify-content: space-between;
  }

  .router-link-active {
    height: 65px;
  }
</style>
