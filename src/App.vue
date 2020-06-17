<template>
  <div id="app">
    <Nav></Nav>
    <Content></Content>
  </div>
</template>

<script>
import Nav from './components/Nav'
import Content from './components/Content'

export default {
  name: 'App',
  components: {
    Nav,
    Content
  }
}
</script>

<style>

</style>
