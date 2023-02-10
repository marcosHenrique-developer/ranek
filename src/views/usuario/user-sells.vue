<template>
  <section>
    <div v-if="transacao">
      <h2>Vendas</h2>
      <div class="produtos-wrapper" v-for="venda in transacao" :key="venda.id">
        <item-product :product="venda.produto">
          <p class="vendedor">
            <span>Comprador:</span>
            {{ venda.comprador_id }}
            <span>Vendedor:</span>
            {{ venda.vendedor_id }}
          </p>
        </item-product>
        <div class="entrega">
          <h3>Entrega:</h3>
          <ul v-if="venda.endereco">
            <li v-for="(value, key) in venda.endereco" :key="`value${key}`">
              {{ key }}: {{ value }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from "vuex";
import ItemProduct from "@/components/item-product.vue";

export default {
  components: {
    ItemProduct,
  },
  data() {
    return {
      vendas: null,
    };
  },
  computed: {
    ...mapState(["usuario", "login", "transacao"]),
  },
  methods: {
    ...mapActions(["getUserTransation"]),
  },
  watch: {
    login() {
      this.getUserTransation();
    },
  },
  created() {
    if (this.login) {
      this.getUserTransation();
    }
    console.log(this.transacao);
  },
};
</script>

<style scoped>
.produtos-wrapper {
  margin-bottom: 40px;
}

.vendedor span {
  color: #e80;
}

.entrega {
  display: grid;
  grid-template-columns: minmax(100px, 200px) 1fr;
  grid-gap: 20px;
  margin-bottom: 60px;
}

h2 {
  margin-bottom: 20px;
}

h3 {
  margin: 0px;
  justify-self: end;
}
</style>
