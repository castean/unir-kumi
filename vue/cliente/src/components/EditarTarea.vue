<template>
  <navigation/>
  <div class="container">
    <div class="card">
      <div class="card-header">
        Editar Tarea
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="editarTarea">
          <div class="form-group">
            <label for="email" class="form-label">Correo</label>
            <input type="email" class="form-control-plaintext" name="email" v-model="tarea.email" id="email" aria-describedby="helpId" placeholder="ejemplo@dominio.com" readonly>
          </div>
          <br>
          <div class="form-group">
            <label for="">Describir Problema</label>
            <textarea class="form-control" name="descripcion" v-model="tarea.descripcion" id="descripcion" rows="3" disabled readonly></textarea>
          </div>
          <br>
          <div class="form-group">
            <label for="">Resolución de Problema</label>
            <textarea class="form-control" name="solucion" v-model="tarea.solucion" id="solucion" rows="5"></textarea>
          </div>
          <br>
          <div class="btn-group" role="group" aria-label="">
            <button type="submit" class="btn btn-primary">Actualizar</button>
            <router-link :to="{name:'Tareas'}" class="btn btn-warning">Regresar</router-link>
          </div>

        </form>
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
import axios from 'axios';

export default {
  data(){
    return{
      tarea:{}
    }
  },
  mounted(){
    //console.log("Hola mundo desde mounted")
    this.getTarea(this.$route.params.id);
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
    getTarea(id){
      //console.log("Aca va el codigo de getTareas")
      axios
        .get('https://unirsails.herokuapp.com/ticket/'+id)
        //.get('https://jsonplaceholder.typicode.com/todos')
        .then( response => {
          console.log(response)
          this.tarea = response.data[0]
        })
        .catch(e => console.log(e))
    },
    editarTarea(){
      const tareaActualizar = {id: this.$route.params.id, respuesta: this.tarea.solucion} 

      //console.log(tareaEnviar) 
      axios
        .put('https://unirsails.herokuapp.com/ticket/'+this.$route.params.id, tareaActualizar)
        .then(response => {
          console.log(response)
          window.location.href='/'
        })
        .catch(e => console.log(e))
    }
  }
}
</script>

<style>

</style>