<template>
  <section>
    <h2>Endereço de Envio</h2>
    <user-form>
      <button class="btn" @click.prevent="finalizarCompra">
        Finalizar Compra
      </button>
    </user-form>
  </section>
</template>

<script>
import UserForm from "@/components/user-form.vue";
import { mapState } from "vuex";

export default {
  name: "BuySuccess",
  components: {
    UserForm,
  },
  props: ["produto"],
  computed: {
    ...mapState(["user"]),
    compra() {
      return {
        comprador_id: this.user.email,
        vendedor_id: this.produto.usuario_id,
        produto: this.produto,
        endereco: {
          cep: this.user.cep,
          rua: this.user.rua,
          numero: this.user.numero,
          bairro: this.user.bairro,
          cidade: this.user.cidade,
          estado: this.user.estado,
        },
      };
    },
  },
  methods: {
    createTransacao() {
      this.$router.push({ name: "vendas" });
    },
    async criarUsuario() {
      try {
        await this.$store.dispatch("criarUsuario", this.$store.state.usuario);
        await this.$store.dispatch(
          "getUsuario",
          this.$store.state.usuario.email
        );
        await this.createTransacao();
      } catch (error) {
        console.log(error);
      }
    },
    finalizarCompra() {
      this.$store.commit("ADD_USER_TRANSACTION", this.compra);

      if (this.$store.state.login) {
        this.createTransacao();
      } else {
        this.criarUsuario();
      }
    },
  },
};
</script>

<style scoped>
h2 {
  margin-top: 40px;
  margin-bottom: 20px;
}

.btn {
  background: #e80;
}
</style>
