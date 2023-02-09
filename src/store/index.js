// import { api } from "@/services";
import Vue from "vue";
import Vuex from "vuex";
import RanekApi from "../../ranek-api/ranek.json";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    login: false,
    user: {
      id: "",
      email: "",
      nome: "",
      senha: "",
      rua: "",
      cep: "",
      numero: "",
      estado: "",
      cidade: "",
    },
    user_products: [],
  },
  getters: {},
  mutations: {
    UPDATE_LOGIN(state, payload) {
      state.login = payload;
    },
    UPDATE_USER(state, payload) {
      state.user = Object.assign({}, state.user, payload);
    },
    UPDATE_USER_PRODUCTS(state, payload) {
      state.user_products = payload;
    },
    ADD_USER_PRODUCTS(state, payload) {
      state.user_products.unshift(payload);
    },
  },
  actions: {
    // getUser(context, payload) {
    //   return api.get(`usuario${payload}`).then(response => {
    //     context.commit('UPDATE_USER', response.data)
    //     context.commit('UPDATE_LOGIN', true)
    //   })
    // }
    getUser(context, payload) {
      const user = RanekApi.usuario.find((r) => r.id === payload);
      if (user) {
        context.commit("UPDATE_USER", user);
      }
      context.commit("UPDATE_LOGIN", true);
    },
    getUserProducts(context) {
      context.commit("UPDATE_USER_PRODUCTS", RanekApi.produto);
    },
    createUser(context, payload) {
      console.log(payload);
      context.commit("UPDATE_USER", payload);
      context.commit("UPDATE_USER", { id: payload.email });
      // return api.post("/usuario", payload);
    },
    removeUser(context) {
      context.commit("UPDATE_USER", {
        id: "",
        email: "",
        nome: "",
        senha: "",
        rua: "",
        cep: "",
        numero: "",
        estado: "",
        cidade: "",
      });
      context.commit("UPDATE_LOGIN", false);
    },
  },
  modules: {},
});
