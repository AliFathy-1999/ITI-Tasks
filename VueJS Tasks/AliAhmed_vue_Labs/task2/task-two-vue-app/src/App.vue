<template>
  <div class="contanier">
    <div class="row">
      <div class="col-12">
        <Header/>
      </div>
    </div>
    <div class="row">
      <div class="col-3">
        <Links/>
      </div>
      <div class="col-9">
        <Body/>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <Footer/>
      </div>
    </div>
</div>

</template>

<script>
import Header from './components/header.vue'
import Links from './components/links.vue'
import Body from './components/body.vue'
import Footer from './components/footer.vue'
export default {
  name: 'App',
  components: {
    Header,
    Links,
    Body,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
