<template>
<div id="CoinSelector">
    <h1>Select your coin</h1>
    <select id="coinSelector" v-on:change="savePreference">
        <option id="placeholder" value="none" disabled hidden>
            Choose your preferred coin
        </option>
        <option id="BTC" value="BTC">BTC</option>
        <option id="ETH" value="ETH">ETH</option>
        <option id="XRP" value="XRP">XRP</option>
    </select>
</div>
</template>

<script>
export default {
    name: 'CoinSelector',
    data: function() {
        return{
        savedCoin: String,
        }
    },
    methods: {
        savePreference: function (event) {
            this.$store.state.selectedCoin = event.target.value;
            localStorage.savedCoin = event.target.value;
            console.log(localStorage.savedCoin + ' saved to local stroage.');
        }
    },
    mounted() {
        console.log('from coin select ' + this.$store.state.coin);
        if (localStorage.savedCoin) {
            document.getElementById(localStorage.savedCoin).selected = true;
            this.$store.state.selectedCoin = localStorage.savedCoin
        } else {
            document.getElementById("placeholder").selected = true;
        }
    },
};
</script>

<style scoped>

h1 {
    font-size: 26px;
    font-weight: 600;
    color: #2c3e5099;
}

select {
    font-size: 20px;;
    width: 300px;
    text-align: center;
    border:2px solid #aaa;
    border-radius: 5px;
    padding: 5px
}

</style>
