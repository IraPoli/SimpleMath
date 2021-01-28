<template>
<section>
    <header>
        <nav>
            <ul>
                <li>
                    <router-link to="/games">Games</router-link>
                </li>
                <li>
                    <router-link  v-if="!isRegister"  to="/registration">Registration</router-link>
                    <router-link  v-else to="/statistic">Statistic</router-link>
                    
                </li>
            </ul>
        </nav>
    </header>

</section>
</template>
<script>
export default {
    props:[
        'isRegister',
    ]
}
</script>

<style scoped>
header {
    width: 100%;
    height: 5rem;
    text-align: center;
}

nav {
    height: 100%;
}

ul {
    list-style: none;
    margin: 0;
    padding: 0;
    height: 100%;
    display: flex;
    justify-content: right;
    background-color:black;
}

li {
    margin: 0 3rem; 
    background-color:black;  
}

a {
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    text-align: center;
    color: #000;
    text-transform: uppercase;
    font-weight: 400;
    margin-left: 20px;
    margin-bottom: 0px;
    cursor: pointer;
    display: inline-block;
    border-radius: 5px;
    -webkit-transition: all .15s ease-in-out;
    transition: all .15s ease-in-out;
    background-color: transparent;
     background-color:black;
    border: 4px solid #00d7c3;
    color: #00d7c3;
    text-decoration: none;
    
}

a:hover,
a:active,
a.active {
    box-shadow: 0 0 10px 0 #00d7c3 inset, 0 0 20px 2px #00d7c3;
    border: 3px solid #00d7c3;
}
</style>
