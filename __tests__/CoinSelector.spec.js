class LocalStorageMock {
    constructor() {
        this.store = {};
    }

    clear() {
        this.store = {};
    }

    getItem(key) {
        return this.store[key] || null;
    }

    setItem(key, value) {
        this.store[key] = String(value);
    }

    removeItem(key) {
        delete this.store[key];
    }
};

global.localStorage = new LocalStorageMock;
import { Mount } from '@vue/test-utils'
import CoinSelector from './../src/components/CoinSelector.vue';

describe('CoinSelector.vue', () => {
    it('has data', () => {
        expect(typeof CoinSelector.data).toBe('function')
    })
});
