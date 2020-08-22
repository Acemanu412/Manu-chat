const subscription = require('../../../modules/subscription/resolver');

describe('Subscription resolver', () => {
    it('should be an object with a key "Subscription"', () => {
        expect(subscription).toHaveProperty('Subscription')
    })
});