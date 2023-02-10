<template>
  <section>
    <div v-if="product" class="product">
      <ul class="photos">
        <li v-for="(foto, idx) in product.fotos" :key="`foto${idx}`">
          <img :src="foto.src" :alt="foto.titulo" />
        </li>
      </ul>
      <div class="class-info">
        <h1>{{ product.nome }}</h1>
        <p class="price">{{ product.preco | numberPrice }}</p>
        <p class="description">{{ product.descricao }}</p>
        <transition mode="out-in">
          <button
            class="btn"
            v-if="!finalizar"
            :disabled="product.vendido === 'false' ? false : true"
            @click.prevent="() => (finalizar = !finalizar)"
          >
            {{ product.vendido === "false" ? "Comprar" : "Produto Vendido" }}
          </button>
          <buy-success :produto="product" v-else />
        </transition>
      </div>
    </div>
    <r-loading v-else />
  </section>
</template>

<script>
import BuySuccess from "@/components/buy-success.vue";
import RanekApi from "../../ranek-api/ranek.json";

export default {
  components: { BuySuccess },
  name: "RProduct",
  props: ["id"],
  data() {
    return {
      product: null,
      loading: false,
      finalizar: false,
    };
  },
  methods: {
    getProduto() {
      this.product = RanekApi.produto.find((r) => r.id === this.id);
    },
  },
  created() {
    this.loading = true;
    setTimeout(() => {
      this.getProduto();
      this.loading = false;
    }, 1500);
  },
};
</script>

<style lang="scss" scoped>
.product {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  max-width: 900px;
  padding: 60px 20px;
  margin: 0 auto;
  .class-info {
    .price {
      color: #e80;
      font-weight: bold;
      font-size: 1.5rem;
      margin-bottom: 40px;
    }
    .descriptio {
      font-size: 1.2rem;
    }
    .btn {
      margin-top: 60px;
      width: 200px;
    }
  }
}
</style>
