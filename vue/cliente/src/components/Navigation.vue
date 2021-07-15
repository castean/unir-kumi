<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">Unir México</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Tareas</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/users" class="nav-link">Usuarios</router-link>
          </li>
          <li class="nav-item" role="button" @click="salirSistema()">
            <span class="nav-link">Salir</span>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import auth from "@/logic/auth";
export default {
  name: "Navigation",
  methods: {
    async salirSistema() {
      const user = {
        email: this.email
      };
      try {
        auth.deleteUserLogged(user);
        this.$router.push("/login")
      } catch (error) {
        console.log(error);
      }
    }
  }
};

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>