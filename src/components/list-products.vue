<template>
  <section class="products-container">
    <form>
      <input
        name="busca"
        id="busca"
        type="text"
        v-model="search"
        placeholder="Buscar ..."
      />
      <input type="submit" id="lupa" value="Buscar" @click.prevent />
    </form>
    <transition mode="out-in">
      <r-loading v-if="loading" />

      <div v-else-if="productsList && productsList.length" class="products">
        <div class="product" v-for="product in productsList" :key="product.id">
          <router-link :to="{ name: 'produto', params: { id: product.id } }">
            <img
              v-if="product.fotos"
              :src="product.fotos[0].src"
              :alt="product.fotos[0].titulo"
            />
            <p class="price">{{ product.preco | numberPrice }}</p>
            <h2 class="title">{{ product.nome }}</h2>
            <p>{{ product.descricao }}</p>
          </router-link>
        </div>
      </div>
      <div v-else>
        <p>Produtos não encontrados.</p>
      </div>
    </transition>
  </section>
</template>

<script>
import RanekApi from "../../ranek-api/ranek.json";

export default {
  data() {
    return {
      productsList: null,
      search: "",
      loading: false,
    };
  },
  props: {
    products: {
      default: () => {
        return [];
      },
      type: Array,
    },
  },
  watch: {
    search() {
      let filteredList = this.productsList;
      if (this.search) {
        filteredList = filteredList.filter((user) =>
          user.nome.toUpperCase().includes(this.search.toUpperCase())
        );
      } else {
        filteredList = RanekApi.produto;
      }
      this.productsList = filteredList;
    },
  },
  methods: {},
  created() {
    this.loading = true;
    setTimeout(() => {
      this.productsList = RanekApi.produto;
      this.loading = false;
    }, 1500);
  },
};
</script>

<style lang="scss" scoped>
form {
  max-width: 600px;
  margin: 30px auto 60px auto;
  position: relative;
}
#busca {
  width: 100%;
  padding: 20px;
  border: none;
  &:focus,
  &:hover {
    transform: scale(1.1);
  }
}
#lupa {
  width: 62px;
  height: 62px;
  background: url("../assets/search.svg") no-repeat center center;
  text-indent: -150px;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  box-shadow: none;
}
.products-container {
  max-width: 1000px;
  margin: 0 auto;
  .products {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    margin: 30px;
  }
  .product {
    box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
    padding: 10px;
    background: #fff;
    border-radius: 4px;
    transition: all 0.2s;
    &:hover {
      box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
      transform: scale(1.1);
      position: relative;
      z-index: 1;
    }
  }
  .product img {
    border-radius: 4px;
    margin-bottom: 20px;
  }
  .title {
    margin-bottom: 10px;
  }
  .price {
    color: #e80;
    font-weight: bold;
  }
  .no-results {
    text-align: center;
  }
}
</style>
