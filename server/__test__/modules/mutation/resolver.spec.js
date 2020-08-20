const mutation = require('../../../modules/mutation/resolver');

describe('Mutation resolver', () => {
    it('should be an object with a key "Query"', () => {
        expect(mutation).toHaveProperty('Mutation')
    })
});