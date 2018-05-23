<template>
  <v-app>
    <v-toolbar class="toolbar">
      <v-toolbar-title>in[system]</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat>
          <v-icon left>person</v-icon>
          имя пользователя</v-btn>

        <router-link to="/"><v-btn flat>
          Выход</v-btn></router-link>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cupiditate debitis dicta doloribus esse
        explicabo, in ipsa labore laboriosam maiores natus nihil nisi porro quam quas reiciendis rem sint vitae?
        Deserunt, reprehenderit tenetur. Ab, ad consequuntur dolor et eveniet facilis illo labore minus sed voluptate?
        Dolores eum explicabo magnam similique soluta. Ad asperiores aspernatur corporis est exercitationem expedita
        facere fuga ipsum laboriosam maiores quae quaerat, repellendus similique? Accusamus aliquid asperiores commodi,
        doloremque doloribus fugiat laborum magni molestias nisi odio perspiciatis recusandae reiciendis repudiandae,
        soluta tempore tenetur totam velit vero voluptate voluptates. Alias, atque commodi distinctio doloribus magni
        necessitatibus recusandae saepe. A, at commodi debitis delectus dignissimos et in ipsum labore, libero neque
        nesciunt nobis recusandae sunt. Ad aut consequatur, dignissimos ducimus eius eveniet maxime modi optio quae
        quas. Corporis cumque delectus dignissimos error eveniet. Beatae cupiditate dolorum, et ipsum itaque odio quasi
        quidem. Aspernatur optio quas quis reprehenderit unde? Autem excepturi id ipsa necessitatibus nesciunt quibusdam
        repellendus. Asperiores doloribus eaque, enim, ex illo iusto minus nesciunt porro qui repudiandae sit unde!
        Assumenda autem est ex fugiat magni natus odio placeat recusandae. A accusamus, aliquid architecto atque dolor
        dolorum ducimus, eius esse, ipsum minus numquam porro quis repellat temporibus tenetur? Aperiam architecto atque
        autem consectetur distinctio dolor doloremque eligendi error eveniet exercitationem facere fugit id illo ipsum
        libero magnam molestiae mollitia nesciunt officia, perferendis placeat praesentium, provident quae ratione
        recusandae similique sint unde voluptatem voluptatibus voluptatum. Accusamus aperiam at, debitis dignissimos
        distinctio enim esse ex hic, id impedit ipsam libero molestias odit optio perferendis perspiciatis placeat
        voluptates. A minus nesciunt nostrum possimus vero? Adipisci atque commodi cum cupiditate deleniti deserunt
        dignissimos doloribus dolorum error eveniet laboriosam laborum magnam maiores, minima obcaecati officia possimus
        quae quam quos reiciendis reprehenderit sint voluptatem. Accusantium atque dicta ipsam minus obcaecati
        perspiciatis quod sed vitae voluptatibus.</h1>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
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
  }
  main {
    overflow: auto;
    margin-top: 70px;
  }
</style>
