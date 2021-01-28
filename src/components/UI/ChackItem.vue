<template>
   
        <p :class= 'answerState'>{{answerState}}</p>
    
</template>

<script>
export default {
    props:['answerState']
}
</script>

<style scoped>
    p { 
        font-size: 150%;
        font-weight: 600;
        margin: 10px 10px; 
        display: inline-block;
        border-radius: 50px;
        padding: 0 10px;
        background-color: rgb(21, 69, 65);
        color: rgb(21, 69, 65);
    }

    .wrong{
        background-color: red;
        color: white;
    }
    .correct{
        background-color: green;
        color: white;
    }


</style>