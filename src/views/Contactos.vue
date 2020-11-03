<template>
  <div>
      <h2>Contactos del personal.</h2>
      <lista></lista>
      <hr>
        <router-link to="/detalles2/Juan">Detalles</router-link> | 
      <hr>
      <router-view></router-view>
  </div>
</template>

<script>
import Lista from '../components/ContactosComp/Lista.vue';
export default {
    name: 'Contactos',
    components: {
        Lista
    }
}
</script>

<style scoped>

</style>