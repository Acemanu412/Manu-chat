const message = require('../../../modules/message/typedef');

describe('Message typedef', () => {
      it('should be a string defining a type', () => {
          expect(message).toEqual(expect.stringMatching(/type Message/))
      })
  });