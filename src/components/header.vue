<template>
  <div class="header">
    {{ msg }}
  </div>
</template>

<script>

export default {
  name: 'PlantSensor',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');

.header  {
height:30px;
position:fixed;
top:0px;
left:0px;
padding:20px;
background-color:green;
width:100%;
color:white;
font-size:25px;
text-align:center;
font-family: 'Roboto', sans-serif;
} 

</style>
