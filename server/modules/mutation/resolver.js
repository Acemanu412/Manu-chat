const messages = require('../../config/messages');
const subscribers = require('../../config/subscribers');

module.exports = {
    Mutation: {
        postMessage: (parent, {user, content}) => {
            const id = messages.length;
            messages.push({
                id,
                user,
                content
            });
            subscribers.map((f) => f());
            return id;
        }
    }
}