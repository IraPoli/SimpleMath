<template>
<div>
    <table class="calculator" id="calc">

        <tr>
            <td class="calc_td_btn">
                <input type="button" class="calc_btn" value="7" @click="changeValue(7)" />
            </td>
            <td class="calc_td_btn">
                <input type="button" class="calc_btn" value="8" @click="changeValue(8)" />
            </td>
            <td class="calc_td_btn">
                <input type="button" class="calc_btn" value="9" @click="changeValue(9)" />
            </td>

        </tr>
        <tr>
            <td class="calc_td_btn">
                <input type="button" class="calc_btn" value="4" @click="changeValue(4)" />
            </td>
            <td class="calc_td_btn">
                <input type="button" class="calc_btn" value="5" @click="changeValue(5)" />
            </td>
            <td class="calc_td_btn">
                <input type="button" class="calc_btn" value="6" @click="changeValue(6)" />
            </td>

        </tr>
        <tr>
            <td class="calc_td_btn">
                <input type="button" class="calc_btn" value="1" @click="changeValue(1)" />
            </td>
            <td class="calc_td_btn">
                <input type="button" class="calc_btn" value="2" @click="changeValue(2)" />
            </td>
            <td class="calc_td_btn">
                <input type="button" class="calc_btn" value="3" @click="changeValue(3)" />
            </td>

        </tr>
        <tr>
            <td class="calc_td_btn">
                <input type="button" class="calc_btn" value="0" @click="changeValue(0)" />
            </td>
            <td class="calc_td_btn">
                <input type="button" class="calc_btn" value="00" @click="changeValue('00')" />
            </td>
            <td class="calc_td_btn">
                <input type="button" class="calc_btn" value="C" @click="changeValue(null)" />
            </td>
        </tr>

    </table>

    <button @click="changeValue('chack')">Chack</button>
</div>
</template>

<script>
export default {
    methods: {
        changeValue(val) {
            this.$emit('chanhe-value', val);
        }
    }
}
</script>

<style scoped>
*{outline: none;}
div {
    background-color: rgb(21, 69, 65);
}

.calculator {
    width: 300px;
    height: 300px;
    background-color: gray;
    border: 2px solid gray;
    margin: auto;
    padding: 5px;
}

.calculator td {
    height: 16.66%;
    background-color: gray;
    
}

.calc_td_result {
    text-align: center;
    
}

.calc_result {
    width: 90%;
    text-align: right;
     
}

.calc_td_calculs {
    text-align: center;
}

.calc_calculs {
    width: 90%;
    text-align: left;
}

.calc_td_btn {
    width: 25%;
    height: 100%;
}

.calc_btn {
    width: 90%;
    height: 90%;
    font-size: 20px;
    color: white;
    cursor: pointer;
    background-color: rgb(21, 69, 65);
}
.calc_btn:hover{
    background-color: rgb(10, 50, 48);
}
button {
    width: 41%;
    padding-top: 30px;
    padding-bottom: 30px;
    text-align: center;
    color: #000;
    text-transform: uppercase;
    font-weight: 600;
    background-color: darkorange;

    cursor: pointer;
    display: inline-block;
    border-radius: 50px;
    -webkit-transition: all .15s ease-in-out;
    transition: all .15s ease-in-out;
    margin:10px
}
button:hover{
      background-color: red;
}
</style>
