<template>
  <section class="login">
    <h1>Login</h1>
    <form action="">
      <label for="email">E-mail</label>
      <input type="email" nome="email" id="email" v-model="login.email" />
      <label for="senha">E-mail</label>
      <input type="password" nome="senha" id="senha" v-model="login.senha" />
      <button class="btn" @click.prevent="loggar">Entrar</button>
    </form>
    <p class="loss">
      <a href="/" target="_blank">Perdeu a senha ? Clique aqui </a>
    </p>
    <r-create-user />
  </section>
</template>

<script>
import RCreateUser from "@/components/r-create-user.vue";
export default {
  name: "RLogin",
  data() {
    return {
      login: {
        email: "",
        senha: "",
      },
    };
  },
  components: {
    RCreateUser,
  },
  methods: {
    loggar() {
      this.$store.dispatch("getUser", this.login.email);
      this.$router.push({ name: "usuario" });
    },
  },
  created() {},
};
</script>

<style lang="scss" scoped>
.login {
  max-width: 500px;
  margin: 0 auto;
  padding: 0 20px;
  form {
    display: grid;
    .btn {
      width: 100%;
      max-width: 300px;
      margin-left: auto;
      margin-right: auto;
    }
  }
}
.loss {
  text-align: center;
  margin: 20px auto 0 auto;
  a:hover {
    color: #87f;
    text-decoration: underline;
  }
}
h1 {
  text-align: center;
  font-size: 2rem;
  margin-top: 40px;
  color: #87f;
}
</style>
