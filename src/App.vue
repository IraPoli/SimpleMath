<template>
<div>
    <the-navigation :is-register ="isUserSubmited"></the-navigation>
    <main>
        <router-view @start-game="startGame"></router-view>
    </main>
</div>
</template>

<script>
import TheNavigation from './components/navigation/TheNavigation.vue'

export default {
    components: {
        TheNavigation
    },
    data() {
        return {
            selectedTab: 'games',
            isUserSubmited:false,
            curGame: {
                isActiv: false,
                id: ''
            },
            TubType: 'tub',
            gameType: [{
                    id: 'plus',
                    title: '+',
                    lavel: '1'
                },
                {
                    id: 'minus',
                    title: '-',
                    lavel: '1'
                },
                {
                    id: 'mul',
                    title: '*',
                    lavel: '1'
                }
            ]
        }
    },
    methods: {
        startGame(value) {
            this.curGame.isActiv = true;
            this.curGame.id = value;
            alert(this.curGame.id);
        },
        SubmitUser(value){
            console.log(value);
            this.isUserSubmited = !this.isUserSubmited; 
        }
    },
    provide() {
        return {
            gType: this.gameType,
            startGame: this.startGame,
        };
    }

}
</script>

<style>
* {
    background-color: rgb(34, 119, 130);
    box-sizing: border-box;
}

body {
    margin: 0;
    text-align: center;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;

}

header {
    text-align: left;
    height: 150%;
    background-color: black;
    color: white;
    width: 100%;
    font-size: 150%;
    font-weight: 600;
    margin-bottom:40px;
    padding-top:10px;

}

</style>
