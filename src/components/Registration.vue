<template>
  <v-form v-model="valid" class="started-form" @submit.prevent="registerUser">
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
      required
    ></v-text-field>

    <v-text-field type="password"
      v-model="password"
      :rules="passwordRules"
      :counter="6"
      label="Пароль"
      required
    ></v-text-field>
    <v-btn type="submit">Регистрация</v-btn>

  </v-form>
</template>

<script>
  export default {
    data: () => ({
      valid: false,
      position: '',
      subdivision: '',
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
      registerUser () {
        if (this.valid === false) {
          alert('Заполните все поля')
        }
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
          .then(() => {
            localStorage.setItem('userEmail', this.email)
            this.surname = ''
            this.name = ''
            this.patronymic = ''
            this.dateOfBirth = ''
            this.phone = ''
            this.email = ''
            this.password = ''
            this.$router.push('/home')
          })
      }
    }
  }
</script>
<style scoped>
  .input-group {
    height: 55px;
  }

  .started-form {
    height: 600px;
    width: 400px;
    text-align: center;
    padding-bottom: 170px;
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

  .button-exit {
    height: 65px;
  }
</style>
