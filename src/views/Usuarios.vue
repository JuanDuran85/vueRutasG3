<template>
  <div class="container">
    <h2>Lista de Usuarios</h2>
    <ul class="list-group">
        <router-link :to="{name: 'DetalleUsuario', params: {id: item.id}}" tag="li" class="list-group-item" v-for="(item,index) in nombresUser" :key="index">{{item.first_name}}</router-link>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Usuarios',
    data() {
        return {
            nombresUser: []
        }
    },
    methods: {
        async traerUsuariosApi(){
            try {
                let respuesta = await axios.get('https://reqres.in/api/users');
                this.nombresUser = respuesta.data.data;
            } catch (error) {
                console.log(error);
            }
        }
    },
    created() {
        this.traerUsuariosApi();
    },
}
</script>

<style scoped>
    li {
        cursor: pointer;
    }
</style>