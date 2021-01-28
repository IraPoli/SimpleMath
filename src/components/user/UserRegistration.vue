<template>
 <div>
     <h1>Hi hire will be registration</h1>
     <form>
     <p>
       <label for = "NikName">
       <input id = "NikName" type ="text" v-model="userNik" required> Nik Name</label>
       
     </p>

     <p>
      <label for = "Age">
      <input id = "Age" type="number" v-model= "userAge" min="4" max="99" required> Age </label>
     </p>
     
     <button @click="SubmitUserData">Submit</button>
    </form>

 </div>
</template>

<script>
export default {
    data(){
        return{
            userNik: " ",
            userAge: 0
        }
    },
    methods:{
        SubmitUserData(){
           // console.log(this.userNik + "  " + this.userAge);
            this.$emit('toggl-submit',this.userNik,this.userAge);
        }
    }
}
</script>
<style scoped>
form {
    font-size: 120%;
    
}
input {
  background:rgb(201, 201, 201);
  display: inline-block;
  float: left;
}
label{
font-weight:bolder;
display: inline-block;
    float: center;
    clear: left;
    width: 250px;
    text-align: right;
    
 }
 button{
     background:darkgray;
     color: rgb(186, 14, 14);
     font-size: 110%;
     float: center;
 }

</style>