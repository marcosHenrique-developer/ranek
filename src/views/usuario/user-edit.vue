<template>
  <section>
    <user-form />
    <button class="btn" @click.prevent="userChange">Editar</button>
  </section>
</template>

<script>
import UserForm from "@/components/user-form.vue";
export default {
  components: { UserForm },
  methods: {
    userChange() {
      this.$store.dispatch("createUser", this.$store.state.user);
      this.$router.push({ name: "usuario" });
    },
  },
  created() {},
};
</script>

<style lang="scss" scoped></style>
