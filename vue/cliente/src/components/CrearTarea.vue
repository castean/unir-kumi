<template>
  <navigation/>
  <div class="container">
    <div class="card">
      <div class="card-header">
        Crear Tarea
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="agregarTarea">
          <div class="form-group">
            <label for="email" class="form-label">Correo</label>
            <input type="email" class="form-control" name="email" v-model="tarea.email" id="email" aria-describedby="helpId" placeholder="ejemplo@dominio.com">
          </div>
          <br>
          <div class="form-group">
            <label for="">Describir Problema</label>
            <textarea class="form-control" name="descripcion" v-model="tarea.descripcion" id="descripcion" rows="3"></textarea>
          </div>
          <br>
          <div class="btn-group" role="group" aria-label="">
            <button type="submit" class="btn btn-primary">Agregar</button>
            <button type="button" class="btn btn-danger">Cancelar</button>
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
  data: function(){
    return{
      tarea:{}
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
  methods: {
    agregarTarea(){
      let status = false;
      let soporte_clv = Date.now();
      
      const tareaEnviar = {email: this.tarea.email , descripcion: this.tarea.descripcion, status: status, soporte_clv: soporte_clv} 

      //console.log(tareaEnviar) 
      axios
        .post('https://unirsails.herokuapp.com/ticket', tareaEnviar)
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