<template>
  <form>
    <div class="user" v-if="showLogin">
      <label for="name">Nome</label>
      <input id="name" name="name" type="text" v-model="nome" />
      <label for="email">Email</label>
      <input id="email" name="email" type="text" v-model="email" />
      <label for="name">Senha</label>
      <input id="password" name="password" type="password" v-model="senha" />
    </div>
    <label for="cep">Cep</label>
    <input id="cep" name="cep" type="number" v-model="cep" @keyup="fillCep" />
    <label for="rua">Rua</label>
    <input id="rua" name="rua" type="text" v-model="rua" />
    <label for="numero">Número</label>
    <input id="numero" name="numero" type="number" v-model="numero" />
    <label for="bairro">Bairro</label>
    <input id="bairro" name="bairro" type="text" v-model="bairro" />
    <label for="cidade">Cidade</label>
    <input id="cidade" name="cidade" type="text" v-model="cidade" />
    <label for="estado">Esado</label>
    <input id="estado" name="estado" type="text" v-model="estado" />
    <div class="button">
      <slot></slot>
    </div>
  </form>
</template>

<script>
import { mapFields } from "@/helpers.js";
import { getCep } from "@/services.js";
export default {
  name: "UserForm",
  computed: {
    ...mapFields({
      fields: [
        "nome",
        "email",
        "senha",
        "cep",
        "numero",
        "rua",
        "bairro",
        "cidade",
        "estado",
      ],
      base: "user",
      mutation: "UPDATE_USER",
    }),
    showLogin() {
      return !this.$store.state.login || this.$route.name === "edit";
    },
  },
  methods: {
    fillCep() {
      const cep = this.cep.replace(/\D/g, "");
      if (cep.length === 8) {
        getCep(cep).then((response) => {
          this.rua = response.data.logradouro;
          this.bairro = response.data.bairro;
          this.estado = response.data.uf;
          this.cidade = response.data.localidade;
        });
      }
    },
  },
  created() {},
};
</script>

<style lang="scss" scoped>
form,
.user {
  display: grid;
  grid-template-columns: 80px 1fr;
  align-items: center;
}
.user {
  grid-column: 1 / 3;
}
.button {
  grid-column: 2;
  margin-top: 10px;
}
</style>
