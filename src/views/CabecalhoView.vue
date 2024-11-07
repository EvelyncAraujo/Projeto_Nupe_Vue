<script >
 
</script>

<template>
 <header class="cabecalho" >
    <div  class="hide-on-mobile">
<img  src="/public/logo_ifc.png" alt="logo">
 <h1>Núcleo Pedagógico</h1>

    </div>
    <div  class="title-on-mobile"> <h2> Núcleo Pedagógico</h2> </div>
     

</header>


</template>

<style scoped >

@import url('https://fonts.googleapis.com/css2?family=Julius+Sans+One&family=Red+Rose:wght@300..700&display=swap');
.cabecalho{

height: 150px;
background-image: linear-gradient(green,#065903);

}
img{
padding-top: 40px;
padding-right: 1150px;
height: 110px;

}
h1{
  position: absolute;
  top: 55px;
  right: 0;
  width: 600px;
  height: 100px;
  font-size: 40px;
  color: aliceblue;
  font-family: "Julius Sans One", sans-serif;

}

.hide-on-mobile {
  display: block;
}
@media (max-width: 768px) {
  .hide-on-mobile {
    display: none;
  }
}
.title-on-mobile {
  display: block;
}
@media (min-width: 768px) {
  .title-on-mobile {
    display: none;
  }
}
h2 {
  position: relative;
  top: 55px;
  text-align: center;
  width: 470px;
  height: 200px;
  font-size: 30px;
  color: aliceblue;
  font-family: "Julius Sans One", sans-serif;

}

</style>