<template>
  <div id="app">
    <h-header />
    <main id="main">
      <transition mode="out-in">
        <router-view />
      </transition>
    </main>
    <h-footer />
  </div>
</template>

<script>
import HHeader from "@/components/h-header.vue";
import HFooter from "@/components/h-footer.vue";
export default {
  components: {
    HHeader,
    HFooter,
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
body,
ul,
li,
h1,
h2,
p {
  padding: 0;
  margin: 0;
}
ul {
  list-style: none;
}
body {
  font-family: "Courier New", Courier, monospace;
  background: url("./assets/pattern.svg");
  color: #345;
}
label {
  margin-bottom: 5px;
}
a {
  color: #345;
  text-decoration: none;
}
img {
  max-width: 100%;
  display: block;
}
.btn {
  display: blox;
  padding: 10px 30px;
  background: #87f;
  border-radius: 4px;
  color: #fff;
  text-align: center;
  font-size: 1rem;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.2);
  transition: all 0.3s;
  border: none;
  font-family: "Courier New", Courier, monospace;
  cursor: pointer;
  &:hover {
    background: #65d;
    transform: scale(1.1);
  }
}
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  main {
    flex: 1;
  }
}
input,
textarea {
  border-radius: 4px;
  border: 1px solid white;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
  transition: all 0.3s;
  font-size: 1rem;
  font-family: "Times New Roman", Times, serif;
  margin-bottom: 15px;
  &:focus,
  &:hover {
    outline: none;
    border-color: #87f;
    box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
  }
}
.v-enter,
.v-leave-to {
  opacity: 0;
}
.v-enter {
  transform: translate3d(0, -20px, 0);
}
.v-enter {
  transform: translate3d(0, 20px, 0);
}
.v-enter-active,
.v-leave-active {
  transition: all 0.3s;
}
</style>
