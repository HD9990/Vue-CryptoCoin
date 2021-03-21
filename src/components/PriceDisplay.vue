<template>
    <div v-if="this.$store.state.selectedCoin">
        <h2>Price Display Component</h2>
        <p class="price-container">Current {{this.$store.state.selectedCoin}} Price: $ {{this.$store.state.currentPrice | fourDecimal}} AUD</p>
        <p v-if="priceChange">Change from last search: {{priceChange | percentage}}</p>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'PriceDisplay',
    data: function() {
        return{
            priceChange: '',
        }
    },
    methods:{
        updatePrice (coinType){
            axios
                .get('https://trade.cointree.com/api/prices/aud/'+ coinType)
                .then(response => {
                    this.$store.state.currentPrice = response.data.ask;
                    this.priceChange = this.checkPriceChange(coinType, response.data.ask);
                    this.savePrice(coinType, response.data.ask);
                    })
                .catch(error => (console.log(error), alert("Please check your internet connection and try again later.")))
        },
        savePrice (coinType, price){
            localStorage.setItem((coinType + 'Price'), price);
            console.log(coinType + ' price saved as: ' + price);
        },
        checkPriceChange(coinType, currentPrice) {
            if (localStorage.getItem(coinType+'Price')){
                let previousPrice = localStorage.getItem(coinType+'Price');
                return (currentPrice - previousPrice)/previousPrice;
            } else {
                return(null);
            }
        }
    },
    watch: {
        '$store.state.selectedCoin': function() {
            this.updatePrice(this.$store.state.selectedCoin);
        }
    },
    filters: {
        percentage: function (value) {
            if (!value) {
                return '';
            }
            value = value * 100;
            value = Math.round(value * Math.pow(10, 5)) / Math.pow(10, 5);
            value = value + '%';
            return value;
        },
        fourDecimal: function (value) {
            return parseFloat(value).toFixed(4)
        },
    }
}
</script>

<style scoped>
    .price-container{
        font-size: 20px;
        color: #555;
    }
</style>