<template>
<ul>
    <!--li v-for="type in gType " :key="type.id">
        <game-button @click="sendID(type.id)" :mode="type.lavel">{{type.title}}</game-button-->
    <li v-for="item in gType" :key="item.id">

        <router-link curentId="item.title" :to="'/games/'+item.id"> {{item.title}} </router-link>
    </li>
</ul>
</template>

<script>
export default {

    inject: ['gType'],
    //emits: ['start-game'],
    methods: {
        sendID(curId) {
            //alert('hi from  Game vue- ' + curId);
            this.$emit('start-game', curId);
        }
    }

}
</script>

<style scoped>
header {
    width: 100%;
    height: 5rem;
}

nav {
    height: 100%;
}

ul {
    list-style: none;
    margin: 0;
    padding: 0;
    height: 100%;
    display: grid;
    justify-content: center;

}

li {
    margin: 0 2rem;
}

a {
    width: 120px;
    padding-top: 10px;
    padding-bottom: 10px;
    text-align: center;
    text-transform: uppercase;
    font-weight: 400;
    margin-left: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    display: inline-block;
    border-radius: 50px;
    -webkit-transition: all .15s ease-in-out;
    transition: all .15s ease-in-out;
    background-color: transparent;
    border: 6px solid white;
    color: white;
    text-decoration: none;
    font-weight: bold;
}

a:hover,
a:active,
a.active {
    box-shadow: 0 0 10px 0 white inset, 0 0 20px 2px white;
    border: 5px solid white;
    background-color: black;
}
</style>
