<template>
  <div class="container">
    {{ msg }}
    
  </div>
</template>

<script>

export default {
  name: 'container',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');

.container  {
height:100%;
position:fixed;
top:70px;
left:0px;
padding:20px;
padding-top:50px;
background-color:white;
width:100%;
font-size:25px;
text-align:center;
font-family: 'Roboto', sans-serif;
} 

</style>
