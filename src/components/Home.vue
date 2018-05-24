<template>
  <v-app>
    <v-toolbar class="toolbar">
      <v-toolbar-title>in[system]</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat>
          <v-icon left>person</v-icon>
          имя пользователя</v-btn>

        <router-link to="/"><v-btn flat class="button-exit">
          Выход</v-btn></router-link>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <template>


        <ul class="user-list">
          <h3 class="users-list-title">Список пользователей</h3>
          <li><strong>Фамилия:</strong> {{ surname }}</li>
          <li><strong>Имя:</strong>  {{ name }}</li>
          <li><strong>Отчество:</strong>  {{ patronymic }}</li>
          <li><strong>Дата рождения:</strong>  {{ dateOfBirth }}</li>
          <li><strong>Должность:</strong>  {{ position }}</li>
          <li><strong>Подразделение:</strong>  {{ subdivision }}</li>
          <li><strong>Телефон:</strong>  {{ phone }}</li>
          <li><strong>Email:</strong>  {{ email }}</li>
          <li><strong>Пароль:</strong>  {{ password }}</li>
        </ul>
      </template>

      <template>


        <v-form v-model="valid" class="started-form">
          <h3>Добавить нового пользователя</h3>
          <v-text-field
            v-model="surname"
            :rules="surnameRules"
            :counter="50"
            label="Фамилия"
            required
          ></v-text-field>

          <v-text-field
            v-model="name"
            :rules="nameRules"
            :counter="50"
            label="Имя"
            required
          ></v-text-field>

          <v-text-field
            v-model="patronymic"
            :rules="patronymicRules"
            :counter="50"
            label="Отчество"
            required
          ></v-text-field>

          <v-text-field type="date"
            v-model="dateOfBirth"
            :rules="dateOfBirthRules"
            :counter="50"
            label="Дата рождения"
            required
          ></v-text-field>

          <v-text-field
            v-model="position"
            :counter="50"
            label="Должность"
          ></v-text-field>

          <v-text-field
            v-model="subdivision"
            :counter="50"
            label="Подразделение"
          ></v-text-field>

          <v-text-field type="tel"
            v-model="phone"
            :rules="phoneRules"
            :counter="50"
            label="Телефон"
            required
          ></v-text-field>

          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="Email"
          ></v-text-field>

          <v-text-field type="password"
              v-model="password"
              :rules="passwordRules"
              :counter="6"
              label="Пароль"
              required
          ></v-text-field>
          <v-btn @click="submit">Добавить</v-btn>

        </v-form>
      </template>

    </main>

    <v-footer height="auto" class="footer">
      <v-card
        flat
        tile
        class="indigo lighten-1 white--text text-xs-center"
      >

        <v-card-text class="white--text pt-0">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
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
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
    margin: 0 auto;
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
  margin: 10px 50px;
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
  .button-exit {
    height: 65px;
  }
</style>
