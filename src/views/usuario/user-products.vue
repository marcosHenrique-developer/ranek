<template>
  <section>
    <h2>Adicionar Produtos</h2>
    <add-product />
    <h2>Seus Produtos</h2>
    <transition-group v-if="user_products" name="list" tag="ul">
      <li v-for="(product, idx) in user_products" :key="idx">
        <item-product :product="product">
          <p>{{ product.descricao }}</p>
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
</style>
