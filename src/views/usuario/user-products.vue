<template>
  <section>
    <h2>Adicionar Produtos</h2>
    <add-product />
    <h2>Seus Produtos</h2>
    <transition-group v-if="user_products" name="list" tag="ul">
      <li v-for="(product, idx) in user_products" :key="`product${idx}`">
        <item-product :product="product">
          <p>{{ product.descricao }}</p>
          <button class="delete" @click.prevent="deleteProduct(product.id)">
            Deletar
          </button>
        </item-product>
      </li>
    </transition-group>
  </section>
</template>

<script>
import AddProduct from "@/components/add-product.vue";
import ItemProduct from "@/components/item-product.vue";
import { mapState, mapActions } from "vuex";
export default {
  components: {
    AddProduct,
    ItemProduct,
  },
  computed: {
    ...mapState(["login", "user", "user_products"]),
  },
  methods: {
    ...mapActions(["getUserProducts"]),
    deleteProduct() {
      const deleteProduct = window.confirm("Deseja deletar o produto ?");
      if (deleteProduct) {
        this.$store.commit("REMOVE_USER_PRODUCTS");
      } else {
        return;
      }
    },
  },
  watch: {
    login() {
      this.getUserProducts();
    },
  },
  created() {
    if (this.login) {
      this.getUserProducts();
    }
  },
};
</script>

<style lang="scss" scoped>
h2 {
  margin-bottom: 20px;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translate3d(20px, 0, 0);
}
.list-enter-active,
.list-leave-active {
  transition: all 0.3s;
}
.delete {
  position: absolute;
  top: 0;
  right: 0;
  background: url("../../assets/remove.svg");
  width: 24px;
  height: 24px;
  text-indent: -140px;
  overflow: hidden;
  cursor: pointer;
  border: none;
}
</style>
