<template>
<dialog open>
    <header>{{question + input}}</header>
    <chack-item :answer-state = state :ansver-state = correctAnsv :level-state = level></chack-item>
    <button-set @chanhe-value="inputRes"></button-set>
    

    <label></label>

</dialog>
</template>

<script>
export default {

    inject: ['gType'],
    props: ['curentId', 'lavel'],
    data() {
        return {
            firtNumber: '',
            secondNumber: '',
            result: ' ?   ',
            complicacy: 10,
            sign: '',
            question: '',
            input: '',
            state:'c',
            correctAnsv:0,
            level: 0,
        }
    },
    methods: {
        gameQuestion() {
            switch (this.sign) {
                case 'plus':
                    this.firtNumber = this.rundomN();
                    this.secondNumber = this.rundomN();
                    this.result = this.firtNumber + this.secondNumber
                    this.question = (+this.firtNumber + ' + ' + this.secondNumber + ' = ');

                    break;
                case 'minus':
                    this.secondNumber = this.rundomN();
                    this.result = this.rundomN()
                    this.firtNumber = this.result + this.secondNumber;
                    this.question = (this.firtNumber + ' - ' + this.secondNumber + ' = ');

                    break;
                case 'mul':
                    this.secondNumber = this.rundomN();
                    this.firtNumber = this.rundomN()
                    this.result = this.firtNumber * this.secondNumber;
                    this.question = (this.firtNumber + ' * ' + this.secondNumber + ' = ');
                    break;
            }

        },
        inputRes(value) {

            if (value === null && this.input.length > 0) {
                this.input = this.input.slice(0, -1)

            }
            if (value === 'chack') {
                if (this.result == this.input) {
                   
                    this.state= 'correct';
                    this.correctAnsv +=1;
                   // this.input = this.input +this.state// + ' CORRECT';
                } else {
                    this.state= 'wrong';
                    setTimeout(() => {
                this.input =''
            }, 1000);
                   // this.input = this.input + ' WRONG';
                }
            }
            if (value !== null && value !== 'chack') {
                this.input = this.input + value;
            }

        },
        rundomN() {
            return Math.floor(Math.random() * this.complicacy);// * this.level );
        },

    },
    watch: {
        correctAnsv(value){
            console.log("correct ansver ,  your points - ", value);
           
            setTimeout(() => {
                this.input =''
                this.gameQuestion()
            }, 1000);

        }
    },
    created() {
       /* const gamesID = this.$route.params.gameId;
        this.sign = gamesID;*/
        const curentGame = this.$route.params
        this.sign = curentGame.gameId;
        //this.level = curentGame.lavel ; //!!!
        console.log("current lavel " ,this.level);
        this.gameQuestion()
    }
}
</script>

<style scoped>
header {
    width: 50%;
    border-radius: 50px;
    padding-left: 30px;
    background-color: white;
    color: black;
    margin: auto;

}

dialog {
    width: 45%;
    border-radius: 50px;
    background-color: rgb(21, 69, 65);
}
</style>
