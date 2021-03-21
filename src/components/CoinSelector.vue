<template>
<div id="CoinSelector">
    <h1>Select your coin</h1>
    <select v-on:change="savePreference">
        <option :selected="!this.$store.state.selectedCoin" value="none" disabled hidden>
            Choose your preferred coin  
        </option>
        <option :selected="this.$store.state.selectedCoin == 'BTC'" value="BTC">BTC</option>
        <option :selected="this.$store.state.selectedCoin == 'ETH'" value="ETH">ETH</option>
        <option :selected="this.$store.state.selectedCoin == 'XRP'" value="XRP">XRP</option>
    </select>
</div>
</template>

<script>
export default {
    name: 'CoinSelector',
    methods: {
        savePreference: function (event) {
            this.$store.state.selectedCoin = event.target.value;
            localStorage.setItem('preferredCoin', event.target.value);
        }
    },
    mounted() {
        this.$store.state.selectedCoin = localStorage.getItem('preferredCoin');
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
