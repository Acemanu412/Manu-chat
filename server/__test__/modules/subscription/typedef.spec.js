const subscription = require('../../../modules/subscription/typedef');

describe('Subscription typedef', () => {
      it('should be a string defining a type', () => {
          expect(subscription).toEqual(expect.stringMatching(/type Subscription/))
      })
  });