global.localStorage = new LocalStorageMock;
import CoinSelector from './../src/components/CoinSelector.vue';

describe('CoinSelector.vue', () => {
    it('has data', () => {
        expect(typeof CoinSelector.data).toBe('function')
    })
});
