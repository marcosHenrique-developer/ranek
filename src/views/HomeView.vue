<template>
  <section>
    <h1>Compre ou venda</h1>
    <list-products />
  </section>
</template>

<script>
import ListProducts from "@/components/list-products.vue";

export default {
  name: "HomeView",
  data() {
    return {};
  },
  components: {
    ListProducts,
  },
  methods: {},
  created() {},
};
</script>

<style lang="scss" scoped>
h1 {
  color: #87f;
  font-size: 2rem;
  text-align: center;
}
</style>
