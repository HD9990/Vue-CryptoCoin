<template>
    <div v-if="this.$store.state.selectedCoin">
        <h2>Price Display Component</h2>
        <p class="price-container">Current {{this.$store.state.selectedCoin}} Price: $<span class="price-tag">{{this.$store.state.currentPrice}}</span> AUD</p>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'PriceDisplay',
    methods:{
        getPrice (coinType){
            let price;
            axios
                .get('https://trade.cointree.com/api/prices/aud/'+ coinType)
                .then(response => {
                    price = response.data.ask;
                    this.savePrice(coinType, price);
                    console.log('price is ' + price);
                    })
                .catch(error => console.log(error))
            return price;
        },
        savePrice (coinType, price){
            switch (coinType){
                case "BTC":
                    localStorage.BTCPrice = price;
                    console.log('BTC PRICE SAVED AS: ' + price);
                    break;    
                case "ETH":
                    localStorage.ETHPrice = price;
                    console.log('ETH PRICE SAVED AS: ' + price)
                    break;   
                case "XRP":
                    localStorage.XRPPrice = price;
                    console.log('XRP PRICE SAVED AS: ' + price)
                    break;
                default:
                    console.log("no type match")
            }
        }
    },
    watch: {
        '$store.state.selectedCoin': async function() {
            this.$store.state.currentPrice = await this.getPrice(this.$store.state.selectedCoin)
            console.log('logging stored price: ' + this.$store.state.currentPrice)
        }
    }
}
</script>

<style scoped>
    .price-container{
        font-size: 16px;
        color: #555;
    }
    .price-tag{
        color: red;
    }
</style>