<template>
  <navigation/>
  <div class="container">
    <div class="card">
      <div class="card-header">
        Lista de usuarios
      </div>
      <div class="card-body">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#Id</th>
              <th scope="col">Nombre</th>
              <th scope="col">Correo</th>
              <th scope="col">Estatus</th>
              <th colspan="2"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="usuario in usuarios" :key="usuario.id">
              
              <td>{{usuario.id}}</td>
              <td>{{usuario.fullName}}</td>
              <td>{{usuario.email}}</td>
              <td>{{usuario.emailStatus}}</td>
              <td>
                <router-link :to="{name:'Editar',params:{id: usuario.id}}" class="btn btn-primary btn-sm btn-block">Editar</router-link>
              </td>
              <td role="button" @click="borrarUsuario(usuario.id)">
                <button type="button" name="eliminar" id="eliminar" class="btn btn-danger btn-sm btn-block">Eliminar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="card-footer text-muted">
        UNIR México 2021 - Antonio Castellanos Loya
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "../components/Navigation.vue";
import auth from "@/logic/auth";
import axios from 'axios'
export default {
  data(){
    return{
      usuarios:null
    }
  },
  mounted(){
    //console.log("Hola mundo desde mounted")
    this.getUsuarios();
  },
  components: {
    navigation: Navigation
  },
  computed: {
    userLogged() {
      return auth.getUserLogged();
    }
  },
  methods: {
    getUsuarios(){
      //console.log("Aca va el codigo de getusuarios")
      axios
        .get('https://unirsails.herokuapp.com/users')
        //.get('https://jsonplaceholder.typicode.com/todos')
        .then( response => {
          console.log(response)
          this.usuarios = response.data
        })
        .catch(e => console.log(e))
    },
    borrarUsuario(id){
      console.log(id);
      axios
        .delete('https://unirsails.herokuapp.com/user/' + id)
        //.get('https://jsonplaceholder.typicode.com/todos')
        .then( response => {
          console.log(response)
          window.location.href='/'
        })
        .catch(e => console.log(e))
    }
  }
}
</script>

<style>
.container{
  margin-top: 15px;
}
</style>