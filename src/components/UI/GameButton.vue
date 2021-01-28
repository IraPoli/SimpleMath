<template>
<div :class="mode"><slot></slot></div>

</template>

<script>
export default {
    props:['mode']
}
</script>

<style scoped>
.tub {
  width: 120px;
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
  color: #000;
  text-transform: uppercase;
  font-weight: 400;
  margin-left: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  display: inline-block;
  border-radius: 5px;
  -webkit-transition: all .15s ease-in-out;
  transition: all .15s ease-in-out;
  background-color: transparent;
  border: 3px solid #00d7c3;
  color: #00d7c3;
}


.tub:hover {
  box-shadow: 0 0 10px 0 #00d7c3 inset, 0 0 20px 2px #00d7c3;
  border: 3px solid #00d7c3;
}

.button ,
.l-1  {
  width: 170px;
  padding-top: 30px;
  padding-bottom: 30px;
  text-align: center;
  color: #000;
  text-transform: uppercase;
  font-weight: 600;
  margin-left: 30px;
  margin-bottom: 30px;
  cursor: pointer;
  display: inline-block;
  border-radius: 50px;
  -webkit-transition: all .15s ease-in-out;
  transition: all .15s ease-in-out;
}



.l-1 {
  background-color: transparent;
  border: 3px solid #ffe101;
  color: #ffe101;
}
.l-1:hover {
  box-shadow: 0 0 10px 0 #ffe101 inset, 0 0 20px 2px #ffe101;
  border: 3px solid #ffe101;
}

</style>