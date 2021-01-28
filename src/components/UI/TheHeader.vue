<template>
<header>{{title}}</header>
</template>

<script>
export default {
    props: ['title']
}
</script>

<style scoped>
header {
    text-align: left;
    height: 150%;
    background-color: rgb(21, 69, 65);
    color: white;
    width: 100%;
    font-size: 150%;
    font-weight: 600;

}
</style>
