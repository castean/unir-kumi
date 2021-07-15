<template>
  <navigation/>
  <div class="container">
    <router-link to="/ticket" class="btn btn-success">Crear Tarea</router-link>
    <br><br>
    <div class="card">
      <div class="card-header">
        Lista de Tareas
      </div>
      <div class="card-body">
        <table class="table">
          <thead>
            <tr>
              <th scope="col"># Tarea</th>
              <th scope="col">Solicitado por:</th>
              <th scope="col">Descripcion</th>
              <th scope="col">Solucion</th>
              <th scope="col">Estatus</th>
              <th colspan="3"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="tarea in tareas" :key="tarea.id">
              
              <td :class="{'tachado': tarea.status}">{{tarea.soporte_clv}}</td>
              <td :class="{'tachado': tarea.status}">{{tarea.email}}</td>
              <td :class="{'tachado': tarea.status}">{{tarea.descripcion}}</td>
              <td :class="{'tachado': tarea.status}">{{tarea.respuesta}}</td>
              <td>{{tarea.status}}</td>
              <td>
                <router-link :to="{name:'Editar',params:{id: tarea.id}}" class="btn btn-primary btn-sm btn-block">Atender</router-link>
              </td>
              <td role="button" @click="finalizarTarea(tarea.id)">
                <button type="button" name="eliminar" id="eliminar" class="btn btn-warning btn-sm btn-block">Terminar</button>
              </td>
              <td role="button" @click="borrarTarea(tarea.id)">
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
      tareas:null
    }
  },
  components: {
    navigation: Navigation
  },
  computed: {
    userLogged() {
      return auth.getUserLogged();
    }
  },
  mounted(){
    //console.log("Hola mundo desde mounted")
    this.getTareas();
  },
  methods: {
    getTareas(){
      //console.log("Aca va el codigo de getTareas")
      // var axios = require("axios");
      // const axiosInstance = axios.create({
      //   headers: {
      //     "Access-Control-Allow-Origin": "*",
      //     "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
      //   }
      // });
      axios
        .get('https://unirsails.herokuapp.com/tickets')
        //.get('https://jsonplaceholder.typicode.com/todos')
        .then( response => {
          console.log(response)
          this.tareas = response.data
        })
        .catch(e => console.log(e))
    },
    finalizarTarea(id){
      console.log(id);
      let registro = id;
      let status = true;
      const tareaUpdate = {id: registro, status: status} 
      axios
        .put('https://unirsails.herokuapp.com/ticket/' + id, tareaUpdate)
        //.get('https://jsonplaceholder.typicode.com/todos')
        .then( response => {
          console.log(response)
          window.location.href='/'
        })
        .catch(e => console.log(e))
    },
    borrarTarea(id){
      console.log(id);
      axios
        .delete('https://unirsails.herokuapp.com/ticket/' + id)
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
.tachado{
  text-decoration-line: line-through;
}
.container{
  margin-top: 15px;
}
</style>