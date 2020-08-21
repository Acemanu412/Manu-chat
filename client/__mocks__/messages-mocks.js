import { GET_MESSAGES } from '../src/Queries/messages';
import { POST_MESSAGE } from '../src/Mutations/messages';

export default [{
    request: {
        query: GET_MESSAGES,
    },
    result: {
        data: {
            messages: [{
                  id: "0",
                  user: "Manu",
                  content: "Test 1"
                }],
            },
    }
},
{
    request: {
        query: POST_MESSAGE,
        variables: {user: "Manu", content: ""}
    },
    result:  {},
}];