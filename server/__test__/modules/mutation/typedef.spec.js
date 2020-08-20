const mutation = require('../../../modules/mutation/typedef');

describe('Mutation typedef', () => {
      it('should be a string defining a type', () => {
          expect(mutation).toEqual(expect.stringMatching(/type Mutation/))
      })
  });