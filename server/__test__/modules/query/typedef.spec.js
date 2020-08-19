const query = require('../../../modules/query/typedef');

describe('Message typedef', () => {
      it('should be a string defining a type', () => {
          expect(query).toEqual(expect.stringMatching(/type Query/))
      })
  });