<template>
  <div id="app">
    <f-e-d-card-list></f-e-d-card-list>
  </div>
</template>

<script>
import FEDCardList from './components/FEDCardList'

export default {
  name: 'app',
  components: {
    FEDCardList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
::-webkit-scrollbar {
  /* display: none; */
  /* width: 0 !important; */
  width: 5px;
}
::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #007bff, #19caad);
  border-radius: 5px;
}
</style>
