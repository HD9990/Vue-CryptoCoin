<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/cointree-logo-primary.png">
        <CoinSelector />
        <PriceDisplay />
    </div>
</template>

<script>
import CoinSelector from './components/CoinSelector';
import PriceDisplay from './components/PriceDisplay';

export default {
    name: 'App',
    components: { 
        CoinSelector,
        PriceDisplay
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
