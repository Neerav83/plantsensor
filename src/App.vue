<template>
<div>
  <Header msg="Plantsensor" />
  
  <Container  />

</div>
</template>

<script>
import Header from './components/header.vue'
import Container from './components/body.vue'

console.log(new URL(location.href).searchParams.get('username'));

export default {
  name: 'App',
  components: {
    'Header':Header,
    'Container':Container	

  }
}
</script>


