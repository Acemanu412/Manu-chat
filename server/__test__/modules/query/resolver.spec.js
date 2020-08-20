const query = require('../../../modules/query/resolver');

describe('Query resolver', () => {
    it('should be an object with a key "Query"', () => {
        expect(query).toHaveProperty('Query')
    })
});