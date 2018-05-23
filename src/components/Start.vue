<template>
  <v-app>
    <template>
      <v-spacer></v-spacer>
      <v-form v-model="valid" class="started-form">
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
        <router-link to="/home"><v-btn @click="submit">Отправить</v-btn></router-link>

      </v-form>
    </template>
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
<style scoped>
  .started-form {
    width: 800px;
    margin: 0 auto;
    text-align: center;
  }

</style>
