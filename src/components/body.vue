<template>
  <div class="container">
   <h2>Logga in</h2><br>
       <form @submit.prevent="submitform">
        Användarnamn:<br>
        <input class='input' v-model="formdata.name" type='text'><br><br>
          Lösenord:<br>
        <input class='input'  v-model="formdata.password" type='password'><br><br>
            <input class='input' type='submit'  value='Logga in'>
          </form>
  </div>
</template>

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
width:calc(100% - 40px);
font-size:25px;
text-align:center;
font-family: 'Roboto', sans-serif;
} 

.input {
 height: 30px;
 width: 200px;
font-size:17px;
}
</style>



<script>

import axios from 'axios'

export default {
  name: 'Postformdata',
  data () {
    return {
       formdata: {
          name: '', 
          password: '' 
       }
       // this is formdata object to store form values
    }
  },
  methods: {
    submitform(){
      
      axios.post('/url', { this.formdata })
      .then(res => {
         // response
      })
      .catch(err => { 
         // error 
      })
  },
  mounted () {

  },
  components: {

  }
}
}
</script>