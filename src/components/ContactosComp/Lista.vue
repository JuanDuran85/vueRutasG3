<template>
  <div>
      <table>
          <thead>
              <tr>
                  <th>Nombre</th>
                  <th>Dirección</th>
                  <th>Detalles</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="(item, index) in lista" :key="index">
                  <td>{{item.name}}</td>
                  <td>{{item.address}}</td>
                  <td><button @click="mostrar(item.name)">Detalle</button></td>
              </tr>
          </tbody>
      </table>
  </div>
</template>

<script>
export default {
    name: 'Lista',
    data() {
        return {
            lista: [
                {name: "Theodore", address: "236 Geo Shore"},
                {name: "Juan", address: "4206 Stehr Harbors"},
                {name: "Angel", address: "26327 Vivienne Circle"},
                {name: "Dianne", address: "64064 O'Connell Cove"},
                {name: "Paola", address: "07581 Mosciski Lane"},
            ]
        }
    },
    methods: {
        mostrar(valor){
            this.$router.push({name: 'Detalles', params: {name: valor}});
        },
    },
}
</script>

<style>
    table {
        width: 100%;
        border: 1px solid black;
        background-color:azure;
    }

    th, tr, td {
        font-weight: 900;
        font-size: 20px;
        border: 1px solid black;
    }
</style>