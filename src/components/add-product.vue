<template>
  <form class="add-product">
    <label for="nome">Nome</label>
    <input id="nome" name="nome" type="text" v-model="product.nome" />
    <label for="preco">Preço (R$)</label>
    <input id="preco" name="preco" type="number" v-model="product.preco" />
    <label for="fotos">Fotos</label>
    <input id="fotos" name="fotos" type="file" ref="fotos" />
    <label for="descricao">Nome</label>
    <textarea
      id="descricao"
      name="descricao"
      type="text"
      v-model="product.descricao"
    >
    </textarea>
    <input
      type="button"
      class="btn"
      value="Adicionar Produto"
      @click.prevent="addNewProduct"
    />
  </form>
</template>

<script>
export default {
  name: "AddProduct",
  data() {
    return {
      product: {
        nome: "",
        preco: "",
        descricao: "",
        usuario_id: "",
        fotos: null,
      },
    };
  },
  methods: {
    formatProduct() {
      this.product.usuario_id = this.$store.state.user.id;
    },
    addNewProduct() {
      this.formatProduct();
      this.$store.commit("ADD_USER_PRODUCTS", this.product);
      this.product = {
        nome: "",
        preco: "",
        descricao: "",
        usuario_id: "",
        fotos: null,
        vendido: "false",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.add-product {
  display: grid;
  grid-template-columns: 100px 1fr;
  align-items: center;
  margin-bottom: 60px;
  .btn {
    grid-column: 2;
  }
}
</style>
