import { mount } from '@vue/test-utils'
import PriceDisplay from './../src/components/PriceDisplay.vue';

describe('PriceDisplay.vue', () => {
    it('has data', () => {
        expect(typeof PriceDisplay.data).toBe('function')
    })
});

// describe('Mounted PriceDisplay', () => {
//     const wrapper = mount(PriceDisplay);
//     test('is a Vue instance', () => {
//         expect(wrapper.isVueInstance()).toBeTruthy()
//     })
// })