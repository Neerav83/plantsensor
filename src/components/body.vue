<template>
  <div class="container">
   <h2>Logga in</h2><br><br>
     Användarnamn:<br>
    <input class='input'  type='text'><br><br>
      Lösenord:<br>
    <input class='input' type='password'><br><br>
        <input class='input' type='submit'  value='Logga in'>
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
