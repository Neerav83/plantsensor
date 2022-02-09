<template>
  <Header msg="Plantsensor" />
  <Container msg="Body" />
</template>


<script>
import Header from './components/header.vue'
import Container from './components/body.vue'

export default {
  name: 'App',
  components: {
    'Header':Header,
    'Container':Container	

  }
}
</script>


