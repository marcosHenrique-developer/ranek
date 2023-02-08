<template>
  <section>
    <h2>Cria sua conta</h2>
    <transition mode="out-in">
      <button v-if="!create" class="btn" @click="create = true">
        Criar conta
      </button>
      <user-form v-else>
        <button class="btn" @click.prevent="createUser">Criar sua conta</button>
      </user-form>
    </transition>
  </section>
</template>

<script>
import UserForm from "@/components/user-form.vue";
export default {
  name: "RCreateUser",
  data() {
    return {
      create: false,
    };
  },
  components: {
    UserForm,
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    createUser() {
      if (this.user.nome) {
        this.$store.dispatch("createUser", this.$store.state.user);
        this.$router.push({ name: "usuario" });
      } else {
        alert("Preencha os campos");
      }
    },
  },
  created() {},
};
</script>

<style lang="scss" scoped>
h2 {
  text-align: center;
  margin-top: 40px;
  margin-bottom: 10px;
}
.btn {
  width: 100%;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}
</style>
