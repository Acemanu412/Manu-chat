import { GET_MESSAGES } from '../src/Queries/messages';

export default [{
    request: {
        query: GET_MESSAGES,
    },
    result: {
        data: {
            messages: [{
                  id: "0",
                  user: "manu",
                  content: "Test 1"
                }],
            },
    }
}];