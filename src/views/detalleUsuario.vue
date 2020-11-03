<template>
  <div class="container">
    <h2>Detalles del usuario: {{id}}</h2>
    <div v-if="mostrando" class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
    </div>
    <div v-else class="card">
        <img :src="avatar" class="card-img-top" :alt="id" >
        <div class="card-body">
            <h5 class="card-title">Nombre{{first_name}}</h5>
            <p class="card-text">Apellido: {{last_name}}, Correo: {{email}}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
    <hr>
    <a class="btn btn-primary" href="#" role="button" @click="regresar">Volver</a>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'detalleUsuario',
    data() {
        return {
            first_name: '',
            last_name: '',
            avatar: '',
            email: '',
            id: this.$route.params.id,
            mostrando: true
        }
    },
    methods: {
        regresar(){
            this.$router.push({name: 'Usuarios'});
        },
        async personalUser(){
            try {
                let respuesta = await axios.get(`https://reqres.in/api/users/${this.id}`);
                this.first_name = respuesta.data.data.first_name;
                this.last_name = respuesta.data.data.last_name;
                this.avatar = respuesta.data.data.avatar;
                this.email = respuesta.data.data.email;
                setTimeout(()=>{
                    this.mostrando = false;
                },1500);

            } catch (error) {
                console.log(error);
            }
        }
    },
    created(){
        this.personalUser();
    }
}
</script>

<style scoped>
    img {
        width: 200px;
        text-align: center;
        margin: 0 auto;
    }
</style>