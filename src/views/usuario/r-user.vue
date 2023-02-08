<template>
  <section class="user">
    <nav class="sidenav">
      <ul>
        <li>
          <router-link :to="{ name: 'usuario' }">Produtos</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'compras' }">Compras</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'vendas' }">Vendas</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'edit' }">Editar</router-link>
        </li>
        <li>
          <button @click.prevent="desLoggar">Deslogar</button>
        </li>
      </ul>
    </nav>
    <transition mode="out-in">
      <router-view></router-view>
    </transition>
  </section>
</template>

<script>
export default {
  name: "RUser",
  data() {
    return {};
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  components: {},
  methods: {
    desLoggar() {
      this.$store.dispatch("removeUser");
      this.$router.push({ name: "login" });
    },
  },
  created() {},
};
</script>

<style lang="scss" scoped>
.user {
  display: grid;
  grid-template-columns: minmax(140px, 200px) 1fr;
  max-width: 40px auto;
  margin: 40px auto;
  gap: 30px;
  padding: 20px;
  .sidenav {
    a,
    button {
      padding: 10px;
      display: block;
      background: #f4f7fc;
      margin-bottom: 10px;
      border-radius: 4px;
      &:hover {
        background: #87f;
        color: #fff;
      }
    }
    a.router-link-exact-active {
      background: #87f;
      color: #fff;
    }
    button {
      border: none;
      width: 100%;
      font-size: 1rem;
      text-align: left;
      font-family: "Courier New", Courier, monospace;
      cursor: pointer;
    }
  }
}
@media screen and (max-width: 500px) {
  .user {
    grid-template-columns: 1fr;
    margin: 0 auto;
  }
}
</style>
