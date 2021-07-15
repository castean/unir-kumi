<template>
  <div class="register">
    <h1 class="title">Registrar</h1>
    <form action class="form" @submit.prevent="register">
      <label class="form-label" for="#fullName">Nombre:</label>
      <input
        v-model="fullName"
        class="form-input"
        type="text"
        id="fullName"
        required
        placeholder="Nombre Completo"
      >
      <label class="form-label" for="#email">Email:</label>
      <input
        v-model="email"
        class="form-input"
        type="email"
        id="email"
        required
        placeholder="Email"
      >
      <label class="form-label" for="#password">Password:</label>
      <input
        v-model="password"
        class="form-input"
        type="password"
        id="password"
        placeholder="Password"
      >
      <label class="form-label" for="#password-repeat">Repite la contraeña:</label>
      <input
        v-model="passwordRepeat"
        class="form-input"
        type="password"
        id="password-repeat"
        placeholder="Password"
      >
      <p v-if="error" class="error">Error al crear el usuario</p>
      <input class="form-submit" type="submit" value="Registrar">
    </form>
  </div>
</template>

<script>
import auth from "@/logic/auth";
export default {
  data: () => ({
    fullName: "",
    email: "",
    password: "",
    passwordRepeat: "",
    error: false
  }),
  methods: {
    async register() {
      try {
        await auth.register(this.fullName, this.email, this.password);
        this.$router.push("/")
      } catch (error) {
        console.log(error);
        this.error = true;
      }
    }
  }
};
</script>

<style lang="css" scoped>
.login {
  padding: 2rem;
}
.title {
  text-align: center;
}
.form {
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;
  min-width: 350px;
  max-width: 100%;
  background: rgba(19, 35, 47, 0.9);
  border-radius: 5px;
  padding: 40px;
  box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.3);
}
.form-label {
  margin-top: 2rem;
  color: white;
  margin-bottom: 0.5rem;
}

.form-label:first-of-type {
  margin-top: 0rem;
  color: white;
  margin-bottom: 0.5rem;
}
.form-input {
  padding: 10px 15px;
  background: none;
  background-image: none;
  border: 1px solid white;
  color: white;
}
.form-input:focus {
  padding: 10px 15px;
  background: none;
  background-image: none;
  border: 1px solid white;
  color: white;
  outline: 0;
  border-color: #1ab188;
}
.form-submit {
  background: #1ab188;
  border: none;
  color: white;
  margin-top: 3rem;
  padding: 1rem 0;
  cursor: pointer;
  transition: background 0.2s;
}

.form-submit:hover {
  background: #0b9185;
  border: none;
  color: white;
  margin-top: 3rem;
  padding: 1rem 0;
  cursor: pointer;
  transition: background 0.2s;
}

.error {
  margin: 1rem 0 0;
  color: yellow;
}
.msg {
  margin-top: 3rem;
  text-align: center;
}
</style>